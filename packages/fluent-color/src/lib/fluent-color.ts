import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFluentColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFluentColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFluentColor {
  readonly ngxiFluentColor = input.required<Icon>()
}
