import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiPixelarticons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiPixelarticons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiPixelarticons {
  readonly ngxiPixelarticons = input.required<Icon>()
}
