import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiAcademicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiAcademicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiAcademicons {
  readonly ngxiAcademicons = input.required<Icon>()
}
