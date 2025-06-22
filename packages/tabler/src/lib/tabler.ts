import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiTabler]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiTabler', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiTabler {
  readonly ngxiTabler = input.required<Icon>()
}
