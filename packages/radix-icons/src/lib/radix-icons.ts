import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiRadixIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiRadixIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiRadixIcons {
  readonly ngxiRadixIcons = input.required<Icon>()
}
