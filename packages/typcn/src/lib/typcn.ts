import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiTypcn]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiTypcn', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiTypcn {
  readonly ngxiTypcn = input.required<Icon>()
}
