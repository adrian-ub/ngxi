import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFontisto]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFontisto', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFontisto {
  readonly ngxiFontisto = input.required<Icon>()
}
