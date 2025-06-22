import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineUltimateColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineUltimateColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineUltimateColor {
  readonly ngxiStreamlineUltimateColor = input.required<Icon>()
}
