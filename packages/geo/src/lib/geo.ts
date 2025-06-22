import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGeo]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGeo', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGeo {
  readonly ngxiGeo = input.required<Icon>()
}
