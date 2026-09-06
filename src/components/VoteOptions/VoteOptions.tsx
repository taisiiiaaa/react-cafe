import type { VoteType } from "../../types/votes"
import styles from "./VoteOptions.module.css"

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void
  onReset: () => void
  canReset: boolean
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={styles.container}>
      <button onClick={() => onVote("good")} className={styles.button}>
        Good
      </button>
      <button onClick={() => onVote("neutral")} className={styles.button}>
        Neutral
      </button>
      <button onClick={() => onVote("bad")} className={styles.button}>
        Bad
      </button>
      {canReset && (
        <button
          onClick={onReset}
          className={`${styles.button} ${styles.reset}`}>
          Reset
        </button>
      )}
    </div>
  )
}
