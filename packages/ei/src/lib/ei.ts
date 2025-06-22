import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEi {
  readonly ngxiEi = input.required<Icon>()
}
