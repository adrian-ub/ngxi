import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiFeather]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiFeather', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiFeather {
  readonly ngxiFeather = input.required<Icon>()
}
