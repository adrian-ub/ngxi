import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMaterialIconTheme]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMaterialIconTheme', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMaterialIconTheme {
  readonly ngxiMaterialIconTheme = input.required<Icon>()
}
