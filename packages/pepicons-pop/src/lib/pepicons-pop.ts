import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPepiconsPop]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPepiconsPop', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPepiconsPop {
  readonly ngxiPepiconsPop = input.required<Icon>()
}
