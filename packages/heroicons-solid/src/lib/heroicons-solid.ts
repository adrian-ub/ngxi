import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiHeroiconsSolid]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiHeroiconsSolid', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiHeroiconsSolid {
  readonly ngxiHeroiconsSolid = input.required<Icon>()
}
