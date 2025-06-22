import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiIcomoonFree]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiIcomoonFree', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiIcomoonFree {
  readonly ngxiIcomoonFree = input.required<Icon>()
}
