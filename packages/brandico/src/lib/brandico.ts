import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBrandico]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBrandico', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBrandico {
  readonly ngxiBrandico = input.required<Icon>()
}
