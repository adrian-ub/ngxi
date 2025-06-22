import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCodex]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCodex', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCodex {
  readonly ngxiCodex = input.required<Icon>()
}
