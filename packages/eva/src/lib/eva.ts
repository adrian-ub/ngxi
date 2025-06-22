import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEva]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEva', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEva {
  readonly ngxiEva = input.required<Icon>()
}
