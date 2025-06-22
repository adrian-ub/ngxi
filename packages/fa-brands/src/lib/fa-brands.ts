import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFaBrands]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFaBrands', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFaBrands {
  readonly ngxiFaBrands = input.required<Icon>()
}
