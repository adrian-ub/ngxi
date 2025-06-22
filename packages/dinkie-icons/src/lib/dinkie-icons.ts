import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiDinkieIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiDinkieIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiDinkieIcons {
  readonly ngxiDinkieIcons = input.required<Icon>()
}
