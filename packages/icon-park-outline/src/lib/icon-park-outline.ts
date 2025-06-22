import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIconParkOutline]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIconParkOutline', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIconParkOutline {
  readonly ngxiIconParkOutline = input.required<Icon>()
}
