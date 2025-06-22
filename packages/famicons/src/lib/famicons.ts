import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFamicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFamicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFamicons {
  readonly ngxiFamicons = input.required<Icon>()
}
