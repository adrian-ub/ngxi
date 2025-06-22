import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCircum]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCircum', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCircum {
  readonly ngxiCircum = input.required<Icon>()
}
