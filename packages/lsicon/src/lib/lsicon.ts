import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLsicon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLsicon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLsicon {
  readonly ngxiLsicon = input.required<Icon>()
}
