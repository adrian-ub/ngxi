import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineCyber]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineCyber', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineCyber {
  readonly ngxiStreamlineCyber = input.required<Icon>()
}
