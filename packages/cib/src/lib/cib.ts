import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCib]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCib', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCib {
  readonly ngxiCib = input.required<Icon>()
}
