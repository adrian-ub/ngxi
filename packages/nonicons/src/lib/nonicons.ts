import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiNonicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiNonicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiNonicons {
  readonly ngxiNonicons = input.required<Icon>()
}
