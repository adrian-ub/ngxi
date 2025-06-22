import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiWebsymbol]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiWebsymbol', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiWebsymbol {
  readonly ngxiWebsymbol = input.required<Icon>()
}
