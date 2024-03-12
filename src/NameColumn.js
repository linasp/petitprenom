import React from 'react';
import './NameColumn.css';
import { stringToPastelColor } from './utils';

function NameColumn({ name }) {
    return (
        <div className="NameColumn" style={{color: stringToPastelColor(name)}}>
            <div className="Name">
                {name}
            </div>
        </div>
    );
}

export default NameColumn;