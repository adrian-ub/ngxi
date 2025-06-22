import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiNimbus]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiNimbus', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiNimbus {
  readonly ngxiNimbus = input.required<Icon>()
}
