import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from "Utils/theme-context.js";

const CardWrapper = styled.div`
    background-color: ${props => props.theme.primaryVariant}
    border-radius: 5px;
    color: #ddd;
    display: flex;
    flex-direction: column;
    height: 100%;    
    .card-footer{
        margin-top: auto;
    }
`;

class ThemedCard extends React.Component {
    render() {
        return (
            <CardWrapper
                theme={this.context.theme}
                className={this.props.classes}
            >
                {this.props.children}
            </CardWrapper>
        )
    }
}

ThemedCard.contextType = ThemeContext;

export default ThemedCard;