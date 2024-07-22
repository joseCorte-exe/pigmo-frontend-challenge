import type { PropsWithCSS } from '@/types/utils'
import type { PropsWithChildren } from 'react'
import { Flex } from '../utils/flex'
import type { FlexVariants } from '../utils/flex/styles'
import * as style from './styles'

type TagPropsType = style.TagVariants & PropsWithCSS

export function Tag({
  children,
  bg = 'primary',
  border = 'outline',
  outline,
  padding = 'default',
  radius = 'sm',
  align,
  direction,
  gap,
  justify
}: PropsWithChildren<TagPropsType & FlexVariants>) {
  return (
    <div className={style.tagContainer({ bg, border, outline, padding, radius })}>
      <Flex
        align={align}
        direction={direction}
        gap={gap}
        justify={justify}
      >
        {children}
      </Flex>
    </div>
  )
}
