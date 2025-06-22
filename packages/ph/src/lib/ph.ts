import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPh]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPh', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPh {
  readonly ngxiPh = input.required<Icon>()
}
