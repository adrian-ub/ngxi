import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiTwemoji]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiTwemoji', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiTwemoji {
  readonly ngxiTwemoji = input.required<Icon>()
}
