import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiArcticons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiArcticons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiArcticons {
  readonly ngxiArcticons = input.required<Icon>()
}
