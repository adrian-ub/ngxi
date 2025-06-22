import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiRi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiRi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiRi {
  readonly ngxiRi = input.required<Icon>()
}
