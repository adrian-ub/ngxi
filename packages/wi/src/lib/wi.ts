import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiWi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiWi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiWi {
  readonly ngxiWi = input.required<Icon>()
}
