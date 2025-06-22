import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLineMd]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLineMd', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLineMd {
  readonly ngxiLineMd = input.required<Icon>()
}
