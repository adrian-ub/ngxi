import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiClarity]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiClarity', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiClarity {
  readonly ngxiClarity = input.required<Icon>()
}
