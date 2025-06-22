import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIconamoon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIconamoon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIconamoon {
  readonly ngxiIconamoon = input.required<Icon>()
}
