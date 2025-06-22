import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCryptocurrencyColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCryptocurrencyColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCryptocurrencyColor {
  readonly ngxiCryptocurrencyColor = input.required<Icon>()
}
