import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPs]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPs', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPs {
  readonly ngxiPs = input.required<Icon>()
}
