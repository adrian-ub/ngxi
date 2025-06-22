import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineSharp]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineSharp', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineSharp {
  readonly ngxiStreamlineSharp = input.required<Icon>()
}
