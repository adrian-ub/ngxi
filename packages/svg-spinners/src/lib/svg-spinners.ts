import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSvgSpinners]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSvgSpinners', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSvgSpinners {
  readonly ngxiSvgSpinners = input.required<Icon>()
}
