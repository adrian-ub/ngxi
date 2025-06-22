import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiMedicalIcon]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiMedicalIcon', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiMedicalIcon {
  readonly ngxiMedicalIcon = input.required<Icon>()
}
