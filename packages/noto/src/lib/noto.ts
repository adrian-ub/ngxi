import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiNoto]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiNoto', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiNoto {
  readonly ngxiNoto = input.required<Icon>()
}
