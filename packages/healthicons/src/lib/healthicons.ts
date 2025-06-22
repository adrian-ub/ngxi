import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiHealthicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiHealthicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiHealthicons {
  readonly ngxiHealthicons = input.required<Icon>()
}
