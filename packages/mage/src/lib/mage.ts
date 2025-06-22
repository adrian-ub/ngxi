import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMage]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMage', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMage {
  readonly ngxiMage = input.required<Icon>()
}
