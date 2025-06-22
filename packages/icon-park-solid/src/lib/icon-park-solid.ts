import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIconParkSolid]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIconParkSolid', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIconParkSolid {
  readonly ngxiIconParkSolid = input.required<Icon>()
}
