import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiOcticon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiOcticon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiOcticon {
  readonly ngxiOcticon = input.required<Icon>()
}
