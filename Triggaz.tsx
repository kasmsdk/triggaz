import React from 'react';
import MidiSelector from '../components/MidiSelector';

const Triggaz: React.FC = () => {
    return (
        <div className="kasm-landing-container">
            <h1>Triggaz midi note/cc pattern detection tool</h1>
            <p className="sunken-paragraph">
                Triggaz are a bit like Emanators in reverse, they look for patterns in the live performance and when a
                close enough match has been made it triggers an emanator, or a MIDI CC event or Ableton Live mapped
                parameter and so on</p>
            <p className="sunken-paragraph">
                Triggaz detection pattern browser/gallery and web based pattern learning tools are coming here soon...</p>

            <div style={{ margin: '20px 0' }}>
                <div>
                    Connect to your MIDI device... (you might need a <a href="https://help.ableton.com/hc/en-us/articles/209774225-Setting-up-a-virtual-MIDI-bus" target="_blank">virtual MIDI bus</a>)
                    <MidiSelector />
                </div>
            </div>
        </div>
    );
};

export default Triggaz;
