import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiF7]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiF7', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiF7 {
  readonly ngxiF7 = input.required<Icon>()
}
