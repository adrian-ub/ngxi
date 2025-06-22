import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiQuill]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiQuill', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiQuill {
  readonly ngxiQuill = input.required<Icon>()
}
