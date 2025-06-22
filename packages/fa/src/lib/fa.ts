import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFa]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFa', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFa {
  readonly ngxiFa = input.required<Icon>()
}
