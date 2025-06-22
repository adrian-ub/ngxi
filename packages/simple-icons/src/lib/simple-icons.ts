import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSimpleIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSimpleIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSimpleIcons {
  readonly ngxiSimpleIcons = input.required<Icon>()
}
