import { forwardRef, useImperativeHandle, useState } from 'react'
import './index.less'
type PopoverProps = {
  top: number
  left: number
}

export const Popover = forwardRef(({ top = 0, left = 0 }: PopoverProps, ref) => {
  const [isShow, setIsShow] = useState(false)
  const [data, setData] = useState({})

  const setShow = (visible: boolean, data?: any) => {
    setIsShow(visible)
    if (data) setData(data)
  }

  useImperativeHandle(ref, () => ({ setShow }))

  return (
    <div
      className="popover"
      style={{
        top,
        left,
        display: isShow ? 'inline-block' : 'none'
      }}
    >
      <div className="popover-title">{data.name}</div>
      <div className="popover-content">{'content'}</div>
    </div>
  )
})
