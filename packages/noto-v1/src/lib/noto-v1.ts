import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiNotoV1]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiNotoV1', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiNotoV1 {
  readonly ngxiNotoV1 = input.required<Icon>()
}
