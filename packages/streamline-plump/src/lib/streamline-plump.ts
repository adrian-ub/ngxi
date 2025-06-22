import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiStreamlinePlump]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiStreamlinePlump', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiStreamlinePlump {
  readonly ngxiStreamlinePlump = input.required<Icon>()
}
