import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFluentEmojiFlat]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFluentEmojiFlat', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFluentEmojiFlat {
  readonly ngxiFluentEmojiFlat = input.required<Icon>()
}
