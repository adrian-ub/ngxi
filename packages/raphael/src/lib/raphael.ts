import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiRaphael]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiRaphael', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiRaphael {
  readonly ngxiRaphael = input.required<Icon>()
}
