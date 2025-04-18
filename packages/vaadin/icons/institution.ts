import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinInstitutionIcon],svg[vaadin-institution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0L0 3v2h16V3zM0 14h16v2H0zm16-7V6H0v1h1v5H0v1h16v-1h-1V7zM4 12H3V7h1zm3 0H6V7h1zm3 0H9V7h1zm3 0h-1V7h1z"></svg:path>`,
})
export class VaadinInstitutionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
