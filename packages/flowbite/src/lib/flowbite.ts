import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFlowbite]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFlowbite', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFlowbite {
  readonly ngxiFlowbite = input.required<Icon>()
}
