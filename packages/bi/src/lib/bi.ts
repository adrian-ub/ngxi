import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBi {
  readonly ngxiBi = input.required<Icon>()
}
