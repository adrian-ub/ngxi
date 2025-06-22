import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFontelico]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFontelico', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFontelico {
  readonly ngxiFontelico = input.required<Icon>()
}
