import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIx]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIx', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIx {
  readonly ngxiIx = input.required<Icon>()
}
