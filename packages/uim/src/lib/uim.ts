import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiUim]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiUim', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiUim {
  readonly ngxiUim = input.required<Icon>()
}
