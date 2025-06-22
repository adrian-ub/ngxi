import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiEmojione]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiEmojione', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiEmojione {
  readonly ngxiEmojione = input.required<Icon>()
}
