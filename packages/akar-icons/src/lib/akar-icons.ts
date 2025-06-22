import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiAkarIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiAkarIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiAkarIcons {
  readonly ngxiAkarIcons = input.required<Icon>()
}
