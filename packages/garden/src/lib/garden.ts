import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiGarden]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiGarden', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiGarden {
  readonly ngxiGarden = input.required<Icon>()
}
