import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlinePixel]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlinePixel', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlinePixel {
  readonly ngxiStreamlinePixel = input.required<Icon>()
}
