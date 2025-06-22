import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFluent]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFluent', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFluent {
  readonly ngxiFluent = input.required<Icon>()
}
