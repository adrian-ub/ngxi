import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFxemoji]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFxemoji', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFxemoji {
  readonly ngxiFxemoji = input.required<Icon>()
}
