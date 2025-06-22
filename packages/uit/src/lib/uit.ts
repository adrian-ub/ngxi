import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiUit]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiUit', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiUit {
  readonly ngxiUit = input.required<Icon>()
}
