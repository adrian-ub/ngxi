import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFoundation]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFoundation', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFoundation {
  readonly ngxiFoundation = input.required<Icon>()
}
