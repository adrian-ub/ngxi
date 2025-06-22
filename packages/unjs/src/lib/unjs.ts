import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiUnjs]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiUnjs', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiUnjs {
  readonly ngxiUnjs = input.required<Icon>()
}
