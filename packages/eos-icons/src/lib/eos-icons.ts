import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEosIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEosIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEosIcons {
  readonly ngxiEosIcons = input.required<Icon>()
}
