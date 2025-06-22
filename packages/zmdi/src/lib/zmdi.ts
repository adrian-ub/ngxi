import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiZmdi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiZmdi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiZmdi {
  readonly ngxiZmdi = input.required<Icon>()
}
