import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCharm]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCharm', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCharm {
  readonly ngxiCharm = input.required<Icon>()
}
