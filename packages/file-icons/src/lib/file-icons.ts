import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFileIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFileIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFileIcons {
  readonly ngxiFileIcons = input.required<Icon>()
}
