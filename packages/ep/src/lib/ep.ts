import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEp]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEp', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEp {
  readonly ngxiEp = input.required<Icon>()
}
