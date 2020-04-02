import React from 'react'
import AllCustomers from './AllCustomers'
import NewCustomer from './NewCustomer'
import './App.css'

export default class App extends React.Component {
  state = {
    allCustomers: []
  }

  saveCustomer = async (customerToSave) => {
    console.log('Step 3: save NewCustomer data in App via setState', 'state:', this.state, 'customerToSave:', customerToSave)
    const postNewCustomerResponse = await fetch('http://localhost:4000/customers', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(customerToSave)
    })

    const savedCustomer = await postNewCustomerResponse.json()

    //OPTION 1:
    //this.setState({ allCustomers: [...this.state.allCustomers, savedCustomer] })

    //OPTION 2: (recommended)
    await this.refreshAllCustomers()
  }

  refreshAllCustomers = async () => {
    const allCustomersResponse = await fetch('http://localhost:4000/customers', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'accept': 'application/json; charset=utf-8',
      }
    })

    const allCustomers = await allCustomersResponse.json()

    console.log('allCustomers', allCustomers)

    this.setState({ allCustomers })
  }

  async componentDidMount() {
    console.log('App.componentDidMount -> Run API calls here...')
    //consider having default values while waiting for data...

    await this.refreshAllCustomers()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.allCustomers !== this.state.custallCustomersomerData) {
      console.log('allCustomers changed: from:', prevState.allCustomers, 'to:', this.state.custallCustomersomerData)
    }
  }

  render() {
    console.log('Step 4: pass this.state.customerData to AllCustomers', this.state)
    return (
      <div className="App">
        <AllCustomers title="Danny's Car Shop"
          customers={this.state.allCustomers} />
        <NewCustomer save={this.saveCustomer} />
      </div>
    )
  }

  componentWillUnmount() {
    console.log('App.componentWillUnmount')
  }
}
