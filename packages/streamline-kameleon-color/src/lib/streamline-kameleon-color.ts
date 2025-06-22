import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineKameleonColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineKameleonColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineKameleonColor {
  readonly ngxiStreamlineKameleonColor = input.required<Icon>()
}
