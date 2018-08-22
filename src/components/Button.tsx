import * as React from 'react'

interface ButtonProps {
    hideButton: () => void
}

export const Button: React.StatelessComponent<ButtonProps> = props => {
    return (
        <a onClick={props.hideButton}>
            Button Stateless Component! Click to hide
        </a>
    )
}
