import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFe]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFe', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFe {
  readonly ngxiFe = input.required<Icon>()
}
