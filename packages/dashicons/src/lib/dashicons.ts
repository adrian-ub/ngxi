import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiDashicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiDashicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiDashicons {
  readonly ngxiDashicons = input.required<Icon>()
}
