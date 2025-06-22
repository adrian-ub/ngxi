import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFa6Brands]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFa6Brands', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFa6Brands {
  readonly ngxiFa6Brands = input.required<Icon>()
}
