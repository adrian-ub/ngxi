import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIl]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIl', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIl {
  readonly ngxiIl = input.required<Icon>()
}
