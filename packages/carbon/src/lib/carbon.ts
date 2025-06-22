import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCarbon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCarbon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCarbon {
  readonly ngxiCarbon = input.required<Icon>()
}
