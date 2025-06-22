import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCovid]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCovid', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCovid {
  readonly ngxiCovid = input.required<Icon>()
}
