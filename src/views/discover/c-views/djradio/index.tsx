import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return <div>Recommend</div>
}

export default memo(Djradio)
