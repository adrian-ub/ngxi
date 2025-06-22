import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiTdesign]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiTdesign', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiTdesign {
  readonly ngxiTdesign = input.required<Icon>()
}
