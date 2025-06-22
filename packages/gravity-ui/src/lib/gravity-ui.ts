import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGravityUi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGravityUi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGravityUi {
  readonly ngxiGravityUi = input.required<Icon>()
}
