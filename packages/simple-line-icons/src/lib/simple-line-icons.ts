import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSimpleLineIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSimpleLineIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSimpleLineIcons {
  readonly ngxiSimpleLineIcons = input.required<Icon>()
}
