import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiZondicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiZondicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiZondicons {
  readonly ngxiZondicons = input.required<Icon>()
}
