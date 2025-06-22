import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiVs]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiVs', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiVs {
  readonly ngxiVs = input.required<Icon>()
}
