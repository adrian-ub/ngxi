import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFa6Solid]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFa6Solid', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFa6Solid {
  readonly ngxiFa6Solid = input.required<Icon>()
}
