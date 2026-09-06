import { useState } from "react"
import styles from "./App.module.css"
import CafeInfo from "../CafeInfo/CafeInfo"
import type { Votes, VoteType } from "../../types/votes"
import VoteOptions from "../VoteOptions/VoteOptions"
import VoteStats from "../VoteStats/VoteStats"
import Notification from "../Notification/Notification"

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 })

  const totalVotes = Object.values(votes).reduce((acc, vote) => acc + vote, 0)

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0

  const handleVotes = (vote: VoteType) => {
    setVotes((prevVotes) => ({ ...prevVotes, [vote]: prevVotes[vote] + 1 }))
  }

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 })
  }

  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVotes}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  )
}
