import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiDevicon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiDevicon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiDevicon {
  readonly ngxiDevicon = input.required<Icon>()
}
