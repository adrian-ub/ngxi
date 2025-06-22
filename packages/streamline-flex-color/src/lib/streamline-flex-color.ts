import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineFlexColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineFlexColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineFlexColor {
  readonly ngxiStreamlineFlexColor = input.required<Icon>()
}
