import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiHumbleicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiHumbleicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiHumbleicons {
  readonly ngxiHumbleicons = input.required<Icon>()
}
