import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineLogos]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineLogos', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineLogos {
  readonly ngxiStreamlineLogos = input.required<Icon>()
}
