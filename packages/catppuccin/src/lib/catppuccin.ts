import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiCatppuccin]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiCatppuccin', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiCatppuccin {
  readonly ngxiCatppuccin = input.required<Icon>()
}
