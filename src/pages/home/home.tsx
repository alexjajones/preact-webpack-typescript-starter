import {h, Component} from 'preact';

export interface HomeProps {
    title: string
}

export default class HomeComponent extends Component<HomeProps, any> {
    render (props: HomeProps) {
        return <p>{props.title}</p>
    }
}