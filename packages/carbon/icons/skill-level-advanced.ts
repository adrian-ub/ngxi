import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSkillLevelAdvancedIcon],svg[carbon-skill-level-advanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z"></svg:path>`,
})
export class CarbonSkillLevelAdvancedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
