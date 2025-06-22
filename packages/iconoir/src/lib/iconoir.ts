import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIconoir]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIconoir', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIconoir {
  readonly ngxiIconoir = input.required<Icon>()
}
