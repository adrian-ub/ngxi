import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPepiconsPencil]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPepiconsPencil', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPepiconsPencil {
  readonly ngxiPepiconsPencil = input.required<Icon>()
}
