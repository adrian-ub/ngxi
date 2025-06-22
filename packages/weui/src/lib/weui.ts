import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiWeui]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiWeui', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiWeui {
  readonly ngxiWeui = input.required<Icon>()
}
