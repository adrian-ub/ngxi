import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiDuoIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiDuoIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiDuoIcons {
  readonly ngxiDuoIcons = input.required<Icon>()
}
