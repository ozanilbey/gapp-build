import React from 'react';

export default class Tools extends React.Component {
    constructor(props) {
        super(props);
        this.setFileName = this.setFileName.bind(this);
    }
    setFileName(item) {
        if(this.props.type == 'graph') {
            return 'graph';
        } else if(this.props.type == 'node') {
            return item + '-' + this.props.type;
        } else if(this.props.type == 'edge') {
            return 'edge';
        }
    }
    render() {
        return(
            <ul className="tools">
                {this.props.list.map((item, key) =>
                <li key={key} className={item + ' ' + this.props.type} onClick={() => {this.props.callback(this.props.type, item)}}>
                    <img src={'lib/images/icons/' + this.setFileName(item) + '.svg'} />
                    {item.charAt(0).toUpperCase() + item.substr(1)}
                    {this.props.type == 'graph'
                    ? <svg className="edit" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path transform="translate(-112.000000, -8.000000)" d="M121.409639,13.7576975 L123,13.7576975 L123,18.2048193 C123,18.6465863 122.646586,19 122.204819,19 L112.795181,19 C112.353414,19 112,18.6465863 112,18.2048193 L112,8.79518072 C112,8.35341365 112.353414,8 112.795181,8 L117.227577,8 L117.227577,9.57563588 L113.575636,9.57563588 L113.575636,17.4096386 L121.409639,17.4096386 L121.409639,13.7576975 Z M116.573174,12.7243321 C116.603013,12.6339143 116.647773,12.5434965 116.722372,12.4832179 L120.98945,8.15823122 C121.183408,7.94725626 121.526564,7.94725626 121.735442,8.15823122 L122.884271,9.34873278 C123.108069,9.5446381 122.97379,9.7706827 122.764912,9.98165766 L118.497835,14.2915747 C118.453075,14.3669229 118.363556,14.4272015 118.274037,14.4422711 L116.603013,15.0601263 C116.513494,15.075196 116.409055,15.075196 116.319536,15.0601263 C116.036059,14.9847781 115.871941,14.6833853 115.94654,14.3970622 L116.573174,12.7243321 Z"></path>
                    </svg>
                    : <svg className="add" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M14,9 L11,9 L11,6 C11,5.44771525 10.5522847,5 10,5 C9.44771525,5 9,5.44771525 9,6 L9,9 L6,9 C5.44771525,9 5,9.44771525 5,10 C5,10.5522847 5.44771525,11 6,11 L9,11 L9,14 C9,14.5522847 9.44771525,15 10,15 C10.5522847,15 11,14.5522847 11,14 L11,11 L14,11 C14.5522847,11 15,10.5522847 15,10 C15,9.44771525 14.5522847,9 14,9 Z M10,2 C14.4232082,2 18,5.57679181 18,10 C18,14.4232082 14.4232082,18 10,18 C5.57679181,18 2,14.4232082 2,10 C2,5.57679181 5.57679181,2 10,2 Z M0,10 C0,15.5142857 4.48571429,20 10,20 C15.5142857,20 20,15.5142857 20,10 C20,4.48571429 15.5142857,0 10,0 C4.48571429,0 0,4.48571429 0,10 Z"></path>
                    </svg>
                    }
                </li>
                )}
            </ul>
        )
    }
}