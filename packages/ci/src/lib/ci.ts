import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCi {
  readonly ngxiCi = input.required<Icon>()
}
