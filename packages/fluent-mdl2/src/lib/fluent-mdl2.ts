import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFluentMdl2]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFluentMdl2', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFluentMdl2 {
  readonly ngxiFluentMdl2 = input.required<Icon>()
}
