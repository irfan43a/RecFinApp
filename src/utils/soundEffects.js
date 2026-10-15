// Web Audio API Synthesizer for Cooking Soundscapes (No external audio file dependencies!)

class CookingSoundEngine {
  constructor() {
    this.audioCtx = null;
    this.sizzleNode = null;
    this.sizzleGain = null;
    this.isSizzling = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play a dramatic flame whoosh sound
  playFlameWhoosh() {
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const bufferSize = this.audioCtx.sampleRate * 0.8;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }

      const noise = this.audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.15);
      filter.frequency.exponentialRampToValueAtTime(120, now + 0.7);

      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      noise.start(now);
      noise.stop(now + 0.8);
    } catch (e) {
      console.warn("Audio playback error:", e);
    }
  }

  // Play cooking timer completed bell chime
  playTimerBell() {
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5 note
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.6);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {
      console.warn("Bell audio error:", e);
    }
  }

  // Toggle ambient frying pan sizzle sound
  toggleSizzle(onState) {
    try {
      this.init();
      if (!this.audioCtx) return false;

      if (this.isSizzling && (onState === false || onState === undefined)) {
        // Stop sizzling
        if (this.sizzleGain) {
          const now = this.audioCtx.currentTime;
          this.sizzleGain.gain.linearRampToValueAtTime(0.001, now + 0.5);
          setTimeout(() => {
            if (this.sizzleNode) {
              try { this.sizzleNode.stop(); } catch(err){}
              this.sizzleNode.disconnect();
              this.sizzleNode = null;
            }
          }, 500);
        }
        this.isSizzling = false;
        return false;
      }

      if (!this.isSizzling && (onState === true || onState === undefined)) {
        // Start sizzling
        const bufferSize = this.audioCtx.sampleRate * 2;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        // Generate filtered pinkish noise with crackle
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          const crackle = Math.random() > 0.985 ? (Math.random() * 2 - 1) * 2.2 : 0;
          data[i] = (lastOut * 0.7) + (white * 0.3) + crackle;
          lastOut = data[i];
        }

        const noise = this.audioCtx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const bandpass = this.audioCtx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.value = 3200;
        bandpass.Q.value = 1.2;

        const gain = this.audioCtx.createGain();
        const now = this.audioCtx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.8);

        noise.connect(bandpass);
        bandpass.connect(gain);
        gain.connect(this.audioCtx.destination);

        noise.start(now);
        this.sizzleNode = noise;
        this.sizzleGain = gain;
        this.isSizzling = true;
        return true;
      }
    } catch (e) {
      console.warn("Sizzle toggle error:", e);
      return false;
    }
    return this.isSizzling;
  }
}

export const soundEngine = new CookingSoundEngine();
