import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiWhh]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiWhh', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiWhh {
  readonly ngxiWhh = input.required<Icon>()
}
