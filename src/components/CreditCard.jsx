import React, { Component } from 'react'

export default class CreditCard extends Component {

    maskCCNumber = ccNum => {
        // let bulletPoint = '\u25CF';

        let mask = ('\u25CF'.repeat(4) + " ").repeat(3);
        return mask + ccNum.toString().slice(-4);
    }

    formatExpDate = (month, year) => {
        if (month < 10) month = "0" + month;

        return month + "/" + year;
    }


    render() {

        const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props;

        return (
            <div className="credit-card" style={{ backgroundColor: bgColor, color: color }} >
                <div className="cc-type">
                    {
                        type === "Visa"
                            ? <img src="/img/visa.png" alt="visa" />
                            : <img src="/img/master-card.svg" alt="mastercard" />
                    }
                </div>
                <div className="cc-num"> {this.maskCCNumber(number)}</div>
                <div className="cc-info">
                    <span>Expires {this.formatExpDate(expirationMonth, expirationYear)} &#160;&#160;&#160;&#160;&#160;</span>
                    <span>{bank}</span>
                </div>
                <div>{owner}</div>
            </div>
        )
    }
}
