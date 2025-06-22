import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCryptocurrency]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCryptocurrency', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCryptocurrency {
  readonly ngxiCryptocurrency = input.required<Icon>()
}
