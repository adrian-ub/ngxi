import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPepiconsPrint]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPepiconsPrint', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPepiconsPrint {
  readonly ngxiPepiconsPrint = input.required<Icon>()
}
