import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFormkit]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFormkit', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFormkit {
  readonly ngxiFormkit = input.required<Icon>()
}
