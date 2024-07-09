import React from 'react';

interface IconSwitchProps {
    icon: string;
    onSwitch: () => void;
}

export const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => {
    return (
        <span className="material-icons" onClick={onSwitch} style={{ cursor: 'pointer' }}>
            {icon}
        </span>
    );
};