import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiNrk]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiNrk', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiNrk {
  readonly ngxiNrk = input.required<Icon>()
}
