import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPicon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPicon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPicon {
  readonly ngxiPicon = input.required<Icon>()
}
