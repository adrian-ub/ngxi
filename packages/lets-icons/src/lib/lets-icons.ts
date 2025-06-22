import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLetsIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLetsIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLetsIcons {
  readonly ngxiLetsIcons = input.required<Icon>()
}
