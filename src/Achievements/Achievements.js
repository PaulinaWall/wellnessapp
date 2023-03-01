import React from 'react';

import runningManIcon from '../images/icons/runningManLogo.svg';
import trophyIcon from '../images/icons/trophy.svg';
import badge1 from '../images/badges/badge_1.svg';
import badge2 from '../images/badges/badge_2.svg';
import badge3 from '../images/badges/badge_3.svg';
import badge4 from '../images/badges/badge_4.svg';
import badge5 from '../images/badges/badge_5.svg';
import badge6 from '../images/badges/badge_6.svg';
import bingoBadge from '../images/badges/badge_7.svg';
import badge3Races from '../images/badges/badge_8.svg';
import badge9 from '../images/badges/badge_9.svg';
import badge1Race from '../images/badges/badge_10.svg';
import badge2Races from '../images/badges/badge_11.svg';
import badge13 from '../images/badges/badge_13.svg';

import './Achievements.css';
import { PageHeader } from '../Common/PageHeader/PageHeader';

export const Achievements = () => (
  <div>
    <PageHeader
      heading="Achievements"
      description="Below you can find the badges that you have won and which you still have left to conquer!"
    />

    <div>
      <section>
        <h2 className="small-header">
          <img src={runningManIcon} alt="step-icon" className="small-icon" />
          Monthly step competition
        </h2>

        <div className="badge-container">
          <div className="badge">
            <img src={badge1} className="badge-image" alt="10 000 steps badge" />
            <span className="badge-title">10 000 steps</span>
          </div>
          <div className="badge">
            <img src={badge2} className="badge-image" alt="50 000 steps badge" />
            <span className="badge-title">50 000 steps</span>
          </div>
          <div className="badge">
            <img src={badge3} className="badge-image" alt="100 000 steps badge" />
            <span className="badge-title">100 000 steps</span>
          </div>
          <div className="badge">
            <img src={badge4} className="badge-image" alt="150 000 steps badge" />
            <span className="badge-title">150 000 steps</span>
          </div>
          <div className="badge">
            <img src={badge5} className="badge-image" alt="300 000 steps badge" />
            <span className="badge-title">300 000 steps</span>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="small-header">
          <img src={trophyIcon} alt="achievement-icon" className="small-icon" />
          General achievements
        </h2>

        <div className="badge-container">
          <div className="badge">
            <img src={badge6} className="badge-image" alt="recipe badge" />
            <span className="badge-title">Shared a recipe on the wall</span>
          </div>
          <div className="badge">
          <img src={badge1Race} className="badge-image" alt="1 race badge" />
            <span className="badge-title">Signed up for 1 race</span>
          </div>
          <div className="badge">
            <img src={badge2Races} className="badge-image" alt="2 race badge" />
            <span className="badge-title">Signed up for 2 races</span>
          </div>
          <div className="badge">
            <img src={badge3Races} className="badge-image" alt="3 race badge" />
            <span className="badge-title">Signed up for 3 races</span>
          </div>
          <div className="badge">
            <img src={badge9} className="badge-image" alt="5 competitions badge" />
            <span className="badge-title">Participated in 5 competitions</span>
          </div>
          <div className="badge">
            <img src={bingoBadge} className="badge-image" alt="bingo badge" />
            <span className="badge-title">Got bingo</span>
          </div>
          <div className="badge">
            <img src={badge13} className="badge-image" alt="every brick bingo badge" />
            <span className="badge-title">Completed every brick of the bingo game</span>
          </div>
        </div>
      </section>
    </div>
  </div>
)