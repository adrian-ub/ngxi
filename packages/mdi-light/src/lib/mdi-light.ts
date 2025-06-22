import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMdiLight]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMdiLight', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMdiLight {
  readonly ngxiMdiLight = input.required<Icon>()
}
