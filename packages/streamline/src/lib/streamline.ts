import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamline]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamline', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamline {
  readonly ngxiStreamline = input.required<Icon>()
}
