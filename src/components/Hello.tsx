import * as React from 'react'
import { Button } from './Button'

interface HelloProps {
    compiler: string
    framework: string
    bundler: string
}

interface HelloState {
    showButton: boolean
}

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {
            showButton: false,
        }
    }

    public render() {
        const elements: React.ReactElement<any>[] = []
        if (this.state.showButton) {
            elements.push(
                <div>
                    <Button hideButton={this.hideButton} />
                </div>
            )
        } else {
            elements.push(
                <div>
                    <h1>
                        This is a {this.props.framework} application using{' '}
                        {this.props.compiler} with {this.props.bundler}
                    </h1>
                    <a onClick={this.showButton}>Click me!</a>
                </div>
            )
        }

        return elements
    }

    private showButton = () => {
        this.setState({ showButton: true })
    }

    private hideButton = () => {
        this.setState({ showButton: false })
    }
}
