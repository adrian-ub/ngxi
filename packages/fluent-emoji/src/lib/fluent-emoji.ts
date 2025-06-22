import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFluentEmoji]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFluentEmoji', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFluentEmoji {
  readonly ngxiFluentEmoji = input.required<Icon>()
}
