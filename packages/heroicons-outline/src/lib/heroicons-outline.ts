import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiHeroiconsOutline]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiHeroiconsOutline', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiHeroiconsOutline {
  readonly ngxiHeroiconsOutline = input.required<Icon>()
}
