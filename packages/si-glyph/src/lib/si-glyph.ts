import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSiGlyph]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSiGlyph', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSiGlyph {
  readonly ngxiSiGlyph = input.required<Icon>()
}
