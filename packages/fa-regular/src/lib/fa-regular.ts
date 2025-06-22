import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFaRegular]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFaRegular', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFaRegular {
  readonly ngxiFaRegular = input.required<Icon>()
}
