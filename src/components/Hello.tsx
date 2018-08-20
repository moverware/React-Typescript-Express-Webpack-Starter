import * as React from 'react'
interface HelloProps {
    compiler: string
    framework: string
    bundler: string
}
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <h1>
                This is a {this.props.framework} application using{' '}
                {this.props.compiler} with {this.props.bundler}
            </h1>
        )
    }
}
