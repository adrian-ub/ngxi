import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineFreehand]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineFreehand', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineFreehand {
  readonly ngxiStreamlineFreehand = input.required<Icon>()
}
