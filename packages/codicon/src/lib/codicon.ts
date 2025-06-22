import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCodicon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCodicon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCodicon {
  readonly ngxiCodicon = input.required<Icon>()
}
