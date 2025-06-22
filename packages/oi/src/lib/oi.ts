import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiOi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiOi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiOi {
  readonly ngxiOi = input.required<Icon>()
}
