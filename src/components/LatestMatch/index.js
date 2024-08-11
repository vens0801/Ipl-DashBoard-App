import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    id,
    umpires,
    result,
    manOfTheMatch,
    venue,
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = details

  return (
    <div className="latest-match-container">
      <div className="left">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="cteamlogo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="right">
        <p className="innings-heading">First Innings</p>
        <p className="firstInnings">{firstInnings}</p>
        <p className="innings-heading">Second Innings</p>
        <p className="firstInnings">{secondInnings}</p>
        <p className="mom">Man of the Match</p>
        <p className="manOfTheMatch">{manOfTheMatch}</p>
        <p className="umpires">Umpires</p>
        <p className="umpires">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
