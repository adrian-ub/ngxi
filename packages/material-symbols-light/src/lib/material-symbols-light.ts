import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMaterialSymbolsLight]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMaterialSymbolsLight', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMaterialSymbolsLight {
  readonly ngxiMaterialSymbolsLight = input.required<Icon>()
}
