import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiRivetIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiRivetIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiRivetIcons {
  readonly ngxiRivetIcons = input.required<Icon>()
}
