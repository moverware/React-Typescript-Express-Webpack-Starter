import * as React from 'react'

interface ButtonProps {
    hideButton: () => void
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
    return (
        <a onClick={props.hideButton}>
            Button Function Component! Click to hide
        </a>
    )
}
