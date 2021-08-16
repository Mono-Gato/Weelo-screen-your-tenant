import React from 'react';

import '../assets/styles/components/ScreenTenant.scss';

class ScreenTenantSignals extends React.Component {

  render() {
    return (
      <div className='screenTenant__signals'>
        <div className='screenTenant__signals--title'>
          <span>50+</span>
          <h4>
            data signals
            included
          </h4>
        </div>
        <ul className='screenTenant__signals--info'>
          {this.props.signals.map((item) => {
            return (
              <li key={item.id}>
                {item.signal}
              </li>
            );
          })}
        </ul>
      </div>

    );
  }
}

export default ScreenTenantSignals;
