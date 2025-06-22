import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBx]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBx', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBx {
  readonly ngxiBx = input.required<Icon>()
}
