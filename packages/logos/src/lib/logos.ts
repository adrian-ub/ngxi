import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLogos]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLogos', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLogos {
  readonly ngxiLogos = input.required<Icon>()
}
