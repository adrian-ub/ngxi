import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlineEmojis]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlineEmojis', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlineEmojis {
  readonly ngxiStreamlineEmojis = input.required<Icon>()
}
