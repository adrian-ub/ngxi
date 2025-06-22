import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEl]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEl', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEl {
  readonly ngxiEl = input.required<Icon>()
}
