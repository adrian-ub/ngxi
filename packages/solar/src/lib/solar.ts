import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSolar]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSolar', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSolar {
  readonly ngxiSolar = input.required<Icon>()
}
