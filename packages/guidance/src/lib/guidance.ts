import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGuidance]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGuidance', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGuidance {
  readonly ngxiGuidance = input.required<Icon>()
}
