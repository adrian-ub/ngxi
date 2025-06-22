import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiAntDesign]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiAntDesign', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiAntDesign {
  readonly ngxiAntDesign = input.required<Icon>()
}
