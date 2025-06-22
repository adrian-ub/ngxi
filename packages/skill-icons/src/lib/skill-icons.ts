import type { Icon } from 'ngxi'

import { Directive, input } from '@angular/core'

import { Ngxi } from 'ngxi'

@Directive({
  standalone: true,
  selector: 'svg[ngxiSkillIcons]',
  hostDirectives: [
    {
      directive: Ngxi,
      inputs: ['icon:ngxiSkillIcons', 'width', 'height', 'viewBox'],
    },
  ],
})
export class NgxiSkillIcons {
  readonly ngxiSkillIcons = input.required<Icon>()
}
