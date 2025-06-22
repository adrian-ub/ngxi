import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiVaadin]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiVaadin', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiVaadin {
  readonly ngxiVaadin = input.required<Icon>()
}
