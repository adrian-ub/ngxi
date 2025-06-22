import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEmojioneMonotone]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEmojioneMonotone', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEmojioneMonotone {
  readonly ngxiEmojioneMonotone = input.required<Icon>()
}
