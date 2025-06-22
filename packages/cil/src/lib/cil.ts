import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCil]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCil', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCil {
  readonly ngxiCil = input.required<Icon>()
}
