import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMajesticons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMajesticons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMajesticons {
  readonly ngxiMajesticons = input.required<Icon>()
}
