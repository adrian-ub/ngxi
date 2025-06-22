import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiUil]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiUil', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiUil {
  readonly ngxiUil = input.required<Icon>()
}
