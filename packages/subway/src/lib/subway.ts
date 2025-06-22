import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSubway]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSubway', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSubway {
  readonly ngxiSubway = input.required<Icon>()
}
