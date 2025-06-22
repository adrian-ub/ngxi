import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPrime]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPrime', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPrime {
  readonly ngxiPrime = input.required<Icon>()
}
