import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiTokenBranded]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiTokenBranded', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiTokenBranded {
  readonly ngxiTokenBranded = input.required<Icon>()
}
