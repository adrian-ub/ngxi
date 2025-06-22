import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMi {
  readonly ngxiMi = input.required<Icon>()
}
