import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEntypoSocial]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEntypoSocial', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEntypoSocial {
  readonly ngxiEntypoSocial = input.required<Icon>()
}
