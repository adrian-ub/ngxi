import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMap]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMap', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMap {
  readonly ngxiMap = input.required<Icon>()
}
