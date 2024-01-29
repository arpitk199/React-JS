import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <h5 className='bg-primary text-light text-center p-2 my-1'>{this.props.q} News Articles</h5>
      </>
    )
  }
}
