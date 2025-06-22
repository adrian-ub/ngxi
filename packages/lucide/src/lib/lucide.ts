import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLucide]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLucide', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLucide {
  readonly ngxiLucide = input.required<Icon>()
}
