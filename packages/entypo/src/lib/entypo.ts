import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEntypo]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEntypo', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEntypo {
  readonly ngxiEntypo = input.required<Icon>()
}
