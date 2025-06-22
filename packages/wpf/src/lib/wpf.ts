import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiWpf]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiWpf', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiWpf {
  readonly ngxiWpf = input.required<Icon>()
}
