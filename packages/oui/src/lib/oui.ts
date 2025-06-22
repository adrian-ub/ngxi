import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiOui]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiOui', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiOui {
  readonly ngxiOui = input.required<Icon>()
}
