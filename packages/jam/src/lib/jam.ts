import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiJam]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiJam', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiJam {
  readonly ngxiJam = input.required<Icon>()
}
