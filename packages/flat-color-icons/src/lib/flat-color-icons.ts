import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFlatColorIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFlatColorIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFlatColorIcons {
  readonly ngxiFlatColorIcons = input.required<Icon>()
}
