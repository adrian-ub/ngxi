import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSi]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSi', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSi {
  readonly ngxiSi = input.required<Icon>()
}
