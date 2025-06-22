import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiDeviconPlain]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiDeviconPlain', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiDeviconPlain {
  readonly ngxiDeviconPlain = input.required<Icon>()
}
