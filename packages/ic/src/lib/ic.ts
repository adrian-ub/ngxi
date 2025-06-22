import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIc]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIc', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIc {
  readonly ngxiIc = input.required<Icon>()
}
