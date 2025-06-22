import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineSharpColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineSharpColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineSharpColor {
  readonly ngxiStreamlineSharpColor = input.required<Icon>()
}
