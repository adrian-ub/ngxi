import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineCyberColor]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineCyberColor', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineCyberColor {
  readonly ngxiStreamlineCyberColor = input.required<Icon>()
}
