import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiTeenyicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiTeenyicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiTeenyicons {
  readonly ngxiTeenyicons = input.required<Icon>()
}
