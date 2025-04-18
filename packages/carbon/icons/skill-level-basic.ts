import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSkillLevelBasicIcon],svg[carbon-skill-level-basic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8z"></svg:path>`,
})
export class CarbonSkillLevelBasicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
