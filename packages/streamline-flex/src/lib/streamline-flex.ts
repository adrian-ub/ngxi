import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineFlex]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineFlex', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineFlex {
  readonly ngxiStreamlineFlex = input.required<Icon>()
}
