import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEmojioneV1]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEmojioneV1', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEmojioneV1 {
  readonly ngxiEmojioneV1 = input.required<Icon>()
}
