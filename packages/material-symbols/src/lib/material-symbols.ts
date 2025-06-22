import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMaterialSymbols]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMaterialSymbols', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMaterialSymbols {
  readonly ngxiMaterialSymbols = input.required<Icon>()
}
