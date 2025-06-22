import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPixel]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPixel', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPixel {
  readonly ngxiPixel = input.required<Icon>()
}
