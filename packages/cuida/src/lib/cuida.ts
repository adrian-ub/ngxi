import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCuida]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCuida', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCuida {
  readonly ngxiCuida = input.required<Icon>()
}
