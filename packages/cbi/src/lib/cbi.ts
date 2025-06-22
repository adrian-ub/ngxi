import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCbi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCbi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCbi {
  readonly ngxiCbi = input.required<Icon>()
}
