import React from 'react';
import styled from 'styled-components';
import { getDaysDifference, formatDate } from "../../Utils/date-utils";
import "react-datepicker/dist/react-datepicker.css";

const DateDisplay = styled.p`
    padding-top: 5px;
    padding-right: 10px;
`

class ProjectDate extends React.Component {
    getRemainingDateInfo(date) {
        const dateDue = date;
        let formattedDate;
        let daysRemaining;
        if (dateDue) {
            let today = new Date();
            formattedDate = formatDate(dateDue);
            daysRemaining = getDaysDifference(dateDue, today);
        }
        return {
            formattedDate: formattedDate,
            daysRemaining: daysRemaining
        }
    }

    render() {
        const date = this.props.date;
        const dateInfo = this.getRemainingDateInfo(date);
        return (
            <React.Fragment>
                <DateDisplay onClick={this.props.onClick}
                    className="example-custom-input"
                >
                    {dateInfo.formattedDate}
                    <br/>
                    {dateInfo.daysRemaining}
                </DateDisplay>
            </React.Fragment>
        )
    }
}

export default ProjectDate;