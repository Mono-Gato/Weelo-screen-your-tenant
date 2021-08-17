/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import ScreenTenantForm from './ScreenTenantForm';
import ScreenTenantSignals from './ScreenTenantSignals';
import DownloadAppStore from './DownloadAppStore';

import '../assets/styles/components/ScreenTenant.scss';

class ScreenTenant extends React.Component {
  state = {
    form: {
      tenantName: '',
      tenantNumber: '',
    },
    signals: [
      {
        id: '1',
        signal: 'Criminal record',
      },
      {
        id: '2',
        signal: 'Credit report',
      },
      {
        id: '3',
        signal: 'OFAC / Patriot search',
      },
      {
        id: '4',
        signal: 'Bankruptcies',
      },
      {
        id: '5',
        signal: 'Medical collections',
      },
      {
        id: '6',
        signal: 'Employment sumary',
      },
      {
        id: '7',
        signal: 'Know Aliases',
      },
      {
        id: '8',
        signal: 'Past adress history',
      },
      {
        id: '9',
        signal: 'Sex offender search',
      },
      {
        id: '10',
        signal: 'Nationwide eviction report',
      },
      {
        id: '11',
        signal: 'Bank assest report',
      },
      {
        id: '12',
        signal: 'Credit - Based resident score',
      },
    ],
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <section className='screenTenant container'>
        <div className='screenTenant__container col-11 mx-auto col-md-10 col-lg-11 col-xl-10'>
          <div className='screenTenant__container--desk'>
            <ScreenTenantForm
              onChange={this.handleChange}
              formValues={this.state.form}
            />
            <DownloadAppStore
              GoogleURL={this.props.GoogleURL}
              AppleURL={this.props.AppleURL}
            />
          </div>
          <ScreenTenantSignals
            signals={this.state.signals}
          />
        </div>
      </section>
    );
  }
}

export default ScreenTenant;
