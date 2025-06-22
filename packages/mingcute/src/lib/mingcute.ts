import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMingcute]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMingcute', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMingcute {
  readonly ngxiMingcute = input.required<Icon>()
}
