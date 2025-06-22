import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiQlementineIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiQlementineIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiQlementineIcons {
  readonly ngxiQlementineIcons = input.required<Icon>()
}
