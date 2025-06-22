import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLa]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLa', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLa {
  readonly ngxiLa = input.required<Icon>()
}
