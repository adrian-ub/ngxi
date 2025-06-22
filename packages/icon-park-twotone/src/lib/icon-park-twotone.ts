import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIconParkTwotone]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIconParkTwotone', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIconParkTwotone {
  readonly ngxiIconParkTwotone = input.required<Icon>()
}
