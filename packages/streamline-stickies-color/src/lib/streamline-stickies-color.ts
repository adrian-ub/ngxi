import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineStickiesColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineStickiesColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineStickiesColor {
  readonly ngxiStreamlineStickiesColor = input.required<Icon>()
}
