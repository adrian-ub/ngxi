import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineFreehandColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineFreehandColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineFreehandColor {
  readonly ngxiStreamlineFreehandColor = input.required<Icon>()
}
