import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEt]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEt', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEt {
  readonly ngxiEt = input.required<Icon>()
}
