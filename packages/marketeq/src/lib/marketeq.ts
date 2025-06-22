import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMarketeq]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMarketeq', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMarketeq {
  readonly ngxiMarketeq = input.required<Icon>()
}
