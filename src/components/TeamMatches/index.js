import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBanner = data.team_banner_url

    const latestMatch = data.latest_match_details

    const latestMatchDetail = {
      id: latestMatch.id,
      umpires: latestMatch.umpires,
      result: latestMatch.result,
      manOfTheMatch: latestMatch.man_of_the_match,
      venue: latestMatch.venue,
      date: latestMatch.date,
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      firstInnings: latestMatch.first_innings,
      secondInnings: latestMatch.second_innings,
      matchStatus: latestMatch.match_status,
    }

    const recentMatch = data.recent_matches.map(eachMatch => ({
      id: eachMatch.id,
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      venue: eachMatch.venue,
      date: eachMatch.date,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      teamBannerUrl: teamBanner,
      latestMatchDetails: latestMatchDetail,
      recentMatches: recentMatch,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, recentMatches, isLoading} =
      this.state

    return (
      <div className="team-match-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-card">
            <img src={teamBannerUrl} className="banner-img" alt="team banner" />
            <LatestMatch details={latestMatchDetails} />
            <ul className="recent-match-container">
              {recentMatches.map(eachRecentMatch => (
                <MatchCard
                  matchCardDetails={eachRecentMatch}
                  key={eachRecentMatch.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
