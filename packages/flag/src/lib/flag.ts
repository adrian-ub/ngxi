import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFlag]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFlag', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFlag {
  readonly ngxiFlag = input.required<Icon>()
}
