import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiHugeicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiHugeicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiHugeicons {
  readonly ngxiHugeicons = input.required<Icon>()
}
