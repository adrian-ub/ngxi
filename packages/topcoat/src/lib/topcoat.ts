import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiTopcoat]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiTopcoat', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiTopcoat {
  readonly ngxiTopcoat = input.required<Icon>()
}
