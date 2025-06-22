import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiOpenmoji]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiOpenmoji', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiOpenmoji {
  readonly ngxiOpenmoji = input.required<Icon>()
}
