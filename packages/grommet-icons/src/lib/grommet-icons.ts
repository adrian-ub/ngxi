import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGrommetIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGrommetIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGrommetIcons {
  readonly ngxiGrommetIcons = input.required<Icon>()
}
