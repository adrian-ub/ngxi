import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiToken]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiToken', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiToken {
  readonly ngxiToken = input.required<Icon>()
}
