import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineUltimate]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineUltimate', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineUltimate {
  readonly ngxiStreamlineUltimate = input.required<Icon>()
}
