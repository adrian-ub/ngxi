import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGridicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGridicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGridicons {
  readonly ngxiGridicons = input.required<Icon>()
}
