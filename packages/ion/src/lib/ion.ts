import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIon {
  readonly ngxiIon = input.required<Icon>()
}
