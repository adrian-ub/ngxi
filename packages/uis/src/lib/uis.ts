import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiUis]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiUis', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiUis {
  readonly ngxiUis = input.required<Icon>()
}
