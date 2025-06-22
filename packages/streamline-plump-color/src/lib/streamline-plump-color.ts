import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlinePlumpColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlinePlumpColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlinePlumpColor {
  readonly ngxiStreamlinePlumpColor = input.required<Icon>()
}
