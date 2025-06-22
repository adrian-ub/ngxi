import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGala]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGala', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGala {
  readonly ngxiGala = input.required<Icon>()
}
