import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMicrosoftIcon],svg[cib-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.198 32H0V16.802h15.198zM32 32H16.802V16.802H32zM15.198 15.198H0V0h15.198zm16.802 0H16.802V0H32z"></svg:path>`,
})
export class CibMicrosoftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
