import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMynaui]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMynaui', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMynaui {
  readonly ngxiMynaui = input.required<Icon>()
}
