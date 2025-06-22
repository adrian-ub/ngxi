import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLs]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLs', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLs {
  readonly ngxiLs = input.required<Icon>()
}
