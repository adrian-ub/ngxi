import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiLucideLab]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiLucideLab', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiLucideLab {
  readonly ngxiLucideLab = input.required<Icon>()
}
