import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFa6Regular]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFa6Regular', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFa6Regular {
  readonly ngxiFa6Regular = input.required<Icon>()
}
