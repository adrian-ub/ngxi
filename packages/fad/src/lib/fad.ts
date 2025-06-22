import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFad]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFad', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFad {
  readonly ngxiFad = input.required<Icon>()
}
