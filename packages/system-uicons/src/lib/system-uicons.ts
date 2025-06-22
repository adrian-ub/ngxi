import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSystemUicons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSystemUicons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSystemUicons {
  readonly ngxiSystemUicons = input.required<Icon>()
}
