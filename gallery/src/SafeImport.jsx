import React from 'react';

export default class SafeImport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error){}

    render() {
        if(this.state.hasError) return "Ooops!";
        return this.props.children;
    }
}