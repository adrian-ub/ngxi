import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineColor {
  readonly ngxiStreamlineColor = input.required<Icon>()
}
