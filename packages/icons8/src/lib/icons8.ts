import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIcons8]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIcons8', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIcons8 {
  readonly ngxiIcons8 = input.required<Icon>()
}
