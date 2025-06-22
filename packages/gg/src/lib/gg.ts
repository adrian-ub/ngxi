import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGg]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGg', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGg {
  readonly ngxiGg = input.required<Icon>()
}
