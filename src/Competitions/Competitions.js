import React from 'react';

import runningManLogo from './runningManLogo.svg';
import toughestImage from './toughest.svg';
import malmoloppetImage from './malmoloppet.svg';
import midnattsloppetImage from './midnattsloppet.svg';
import readMoreIcon from './readMore.svg';

import { PageHeader } from '../Common/PageHeader/PageHeader';
import { Button } from '../Common/Button/Button';

import './Competitions.css';

export const Competitions = () => {
	return (
    <div>
      <PageHeader
        heading="Competitions"
        description="Page subheader, explain what this page is about"
      />

			<div className='columns'>
				<div className="left-column">
					<div className='column-header'>
						<span>
							<img src={runningManLogo} alt="running-icon" />
							Internal competitions 
						</span>
						<Button title="+ New competition" />
					</div>

					<div className='card'>
						<p>Monthly step competition</p>
						<div className='card-column'>
							<span className='card-column-item'>You<p>44 542</p></span>
							<span className='card-column-item'>Product & Engi...<p>432 965</p></span>
							<span className='card-column-item'>Eletive<p>2 364 435</p></span>
            </div>
            <Button isSecondary title="+ Add your steps" />
					</div>
				</div>
			
				<div>
					<div className='column-header'>
						<span>
							<img src={runningManLogo} alt="running-icon" />
							Races we sponsor
						</span>
					</div>

					<div className="columns">
						<div className='card'>
							<p>Midnattsloppet</p>
							<img src={midnattsloppetImage} alt="midnight-race" />
              <div className='button-container'>
                <Button title="Sign up" />
								<button className='button-inline'>Read more <img src={readMoreIcon} alt="read-more-icon" /></button>
							</div>
						</div>

						<div className='card'>
							<p>Toughest</p>
							<img src={toughestImage} alt="toughest-race" />
							<div className='button-container'>
                <Button title="Sign up" />
								<button className='button-inline'>Read more <img src={readMoreIcon} alt="read-more-icon" /></button>
							</div>
						</div>

						<div className='card'>
							<p>Malmöloppet</p>
							<img src={malmoloppetImage} alt="malmo-race" />
							<div className='button-container'>
                <Button title="Sign up" />
								<button className='button-inline'>Read more <img src={readMoreIcon} alt="read-more-icon" /></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}