import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIwwa]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIwwa', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIwwa {
  readonly ngxiIwwa = input.required<Icon>()
}
