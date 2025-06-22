import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBitcoinIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBitcoinIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBitcoinIcons {
  readonly ngxiBitcoinIcons = input.required<Icon>()
}
