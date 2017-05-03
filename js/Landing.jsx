import React, { Component } from 'react'
import './main.scss'

class Landing extends Component {
  constructor() {
    super()

    this.state = {
      transformed: false,
    }
  }

  render() {
    let transformedClass

    if (this.state.transformed) {
      transformedClass = 'transformed'
    } else {
      transformedClass = ''
    }

    return (
      <div className="landing">
        <div className={`nav demo-card-wide mdl-card mdl-shadow--2dp ${transformedClass}`}>
          <div className="mdl-card__title">
            <div className='mdl-card__title-logo'></div>
          </div>
          <div className="mdl-card__supporting-text">
            GVI(Global Vision International) offers life-changing programs that place
            travellers in some of the most innocent and beautiful locations on Earth
            for experience filled with purpose, adventure and relationship.
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <div className="mdl-card__actions-title">
              Explore our programs
            </div>
            <div className="mdl-card__actions-list">
              <div
                className="mdl-card__actions-list-item"
                onClick={() => this.setState({ transformed: true })}
              >
                <div className="mdl-card__actions-list-item-animal-icon"></div>
                <p>Wildlife conservation</p>
              </div>
              <div
                className="mdl-card__actions-list-item"
                onClick={() => this.setState({ transformed: true })}
              >
                <div className="mdl-card__actions-list-item-children-icon"></div>
                <p>Children education</p>
              </div>
              <div
                className="mdl-card__actions-list-item"
                onClick={() => this.setState({ transformed: true })}
              >
                <div className="mdl-card__actions-list-item-community-icon"></div>
                <p>Community development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
