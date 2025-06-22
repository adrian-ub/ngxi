import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPajamas]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPajamas', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPajamas {
  readonly ngxiPajamas = input.required<Icon>()
}
