import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPepicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPepicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPepicons {
  readonly ngxiPepicons = input.required<Icon>()
}
