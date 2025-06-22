import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMeteorIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMeteorIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMeteorIcons {
  readonly ngxiMeteorIcons = input.required<Icon>()
}
