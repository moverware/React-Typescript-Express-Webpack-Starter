import * as React from 'react'
// import { Stack, Text } from '@fluentui/react'

import { Field } from './Field'

interface IngestProps {
    provider: string
    apiURL: string
}

interface IngestState {
    providerURL: string
    startTime: Date
    endTime: Date
    reqCompleted: boolean
    reqInProcess: boolean
    reqOk: boolean
    reqStatus: string
}

export class Ingest extends React.Component<IngestProps, IngestState> {
    constructor(props: IngestProps) {
        super(props)
        this.state = {
            providerURL: '',
            startTime: null,
            endTime: null,
            reqCompleted: false,
            reqInProcess: false,
            reqOk: null,
            reqStatus: '',
        }
    }

    public render() {
        return (
            <div>
                <Stack>
                    <Text variant={'large'}>
                        Ingest Data for {this.props.provider}
                    </Text>
                    <Fields>t</Fields>
                </Stack>
            </div>
        )
    }

    private updateProviderUrl = (url: string) => {
        this.setState({ providerURL: url })
    }

    private updateStartTime = (time: Date) => {
        this.setState({ startTime: time })
    }

    private updateEndTime = (time: Date) => {
        this.setState({ endTime: time })
    }
}
