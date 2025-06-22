import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGameIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGameIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGameIcons {
  readonly ngxiGameIcons = input.required<Icon>()
}
