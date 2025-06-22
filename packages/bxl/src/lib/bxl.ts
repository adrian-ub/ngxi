import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBxl]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBxl', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBxl {
  readonly ngxiBxl = input.required<Icon>()
}
