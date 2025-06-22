import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCircleFlags]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCircleFlags', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCircleFlags {
  readonly ngxiCircleFlags = input.required<Icon>()
}
