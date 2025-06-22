import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFlatUi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFlatUi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFlatUi {
  readonly ngxiFlatUi = input.required<Icon>()
}
