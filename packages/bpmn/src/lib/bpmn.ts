import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiBpmn]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiBpmn', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiBpmn {
  readonly ngxiBpmn = input.required<Icon>()
}
