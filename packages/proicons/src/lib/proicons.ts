import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiProicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiProicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiProicons {
  readonly ngxiProicons = input.required<Icon>()
}
