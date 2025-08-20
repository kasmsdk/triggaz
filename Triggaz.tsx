import React from 'react';
import MidiSelector from '../latest/MidiSelector';
import EmanatorCanvas from "../latest/EmanatorCanvas.tsx";
import LatestDemo from "../src/components/LatestDemo.tsx";

const Triggaz: React.FC = () => {
    return (
        <div className="kasm-landing-container">
            <h1>Triggaz midi note/cc pattern detection tool</h1>
            <p>
                Triggaz are a bit like Emanators in reverse, they look for patterns in the live performance and when a
                close enough match has been made it triggers an emanator, or a MIDI CC event or Ableton Live mapped
                parameter and so on</p>
            <p>
                Demo: Try playing Twinkle Twinkle little Star, Three blind Mice, Merrily we Roll Along...</p>

            <LatestDemo />

            <p>
                Triggaz detection pattern browser/gallery and web based pattern learning tools are coming here soon...</p>

            <MidiSelector />

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '40px 0' }}>
                <EmanatorCanvas title="Triggaz 1" />
                <EmanatorCanvas title="Triggaz 2" />
                <EmanatorCanvas title="Triggaz 3" />
            </div>

        </div>
    );
};

export default Triggaz;
