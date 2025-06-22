import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiVscodeIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiVscodeIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiVscodeIcons {
  readonly ngxiVscodeIcons = input.required<Icon>()
}
