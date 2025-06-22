import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMeteocons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMeteocons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMeteocons {
  readonly ngxiMeteocons = input.required<Icon>()
}
