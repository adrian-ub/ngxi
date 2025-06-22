import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMonoIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMonoIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMonoIcons {
  readonly ngxiMonoIcons = input.required<Icon>()
}
