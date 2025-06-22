import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMemory]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMemory', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMemory {
  readonly ngxiMemory = input.required<Icon>()
}
