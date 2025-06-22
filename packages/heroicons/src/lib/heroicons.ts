import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiHeroicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiHeroicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiHeroicons {
  readonly ngxiHeroicons = input.required<Icon>()
}
