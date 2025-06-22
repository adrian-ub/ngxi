import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFluentEmojiHighContrast]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFluentEmojiHighContrast', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFluentEmojiHighContrast {
  readonly ngxiFluentEmojiHighContrast = input.required<Icon>()
}
