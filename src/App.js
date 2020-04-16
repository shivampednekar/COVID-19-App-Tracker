import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import coronaImage from './Image/image.png';
import styles from './utils/App.module.scss';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    // console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);

    this.setState({ data: fetchedData, country: country });

    //fetched the data
    //set the data
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.Container}>
        <img src={coronaImage} alt="COVID-19" className={styles.Image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
