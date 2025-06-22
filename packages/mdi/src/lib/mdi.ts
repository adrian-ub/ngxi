import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMdi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMdi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMdi {
  readonly ngxiMdi = input.required<Icon>()
}
