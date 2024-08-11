import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
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
  } = matchCardDetails

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="matchcard-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="matchcard-heading">{competingTeam}</p>
      <p className="matchcard-result">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
