import React, { Component } from 'react';

export default class LunchFoods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLunchBack: false
        };
    }

    handleMouseEnter() {
        this.setState({ showLunchBack: true });
    }

    handleMouseLeave() {
        this.setState({ showLunchBack: false });
    }

    render() {
        const { _id, _title, name, description, front_thumb_img_url } = this.props.item;
        return (
            <div className='menu-items'>
               <div 
                    className='menu-items__front'
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    <img 
                        className='menu-items__front__image'
                        src={front_thumb_img_url}
                    />
                </div>
                <div 
                    className='menu-items__back'
                    onMouseEnter={() => this.handleMouseEnter()}
                >
                    <div className='menu-items__back__name'>
                        {name}
                    </div>
                    <div className='menu-items__back__description'>
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}        