import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGis]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGis', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGis {
  readonly ngxiGis = input.required<Icon>()
}
