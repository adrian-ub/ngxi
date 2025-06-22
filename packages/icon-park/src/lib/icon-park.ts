import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIconPark]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIconPark', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIconPark {
  readonly ngxiIconPark = input.required<Icon>()
}
