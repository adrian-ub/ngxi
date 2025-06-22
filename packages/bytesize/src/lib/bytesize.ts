import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBytesize]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBytesize', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBytesize {
  readonly ngxiBytesize = input.required<Icon>()
}
