import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStash]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStash', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStash {
  readonly ngxiStash = input.required<Icon>()
}
