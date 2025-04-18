import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsEMailLightIcon],svg[lets-icons-e-mail-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M21 12a9 9 0 1 0-6.67 8.693"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path stroke-linecap="round" d="M16 9v4.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5V12"></svg:path></svg:g>`,
})
export class LetsIconsEMailLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
