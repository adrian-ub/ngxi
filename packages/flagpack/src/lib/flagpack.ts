import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFlagpack]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFlagpack', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFlagpack {
  readonly ngxiFlagpack = input.required<Icon>()
}
