import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBasil]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBasil', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBasil {
  readonly ngxiBasil = input.required<Icon>()
}
