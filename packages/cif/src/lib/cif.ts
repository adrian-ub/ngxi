import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCif]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCif', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCif {
  readonly ngxiCif = input.required<Icon>()
}
