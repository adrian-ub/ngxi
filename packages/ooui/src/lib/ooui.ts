import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiOoui]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiOoui', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiOoui {
  readonly ngxiOoui = input.required<Icon>()
}
