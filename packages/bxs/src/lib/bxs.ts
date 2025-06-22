import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBxs]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBxs', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBxs {
  readonly ngxiBxs = input.required<Icon>()
}
