import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineBlock]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineBlock', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineBlock {
  readonly ngxiStreamlineBlock = input.required<Icon>()
}
