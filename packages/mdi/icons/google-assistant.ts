import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleAssistantIcon],svg[mdi-google-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m14.5 4A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 21.5 9A1.5 1.5 0 0 0 23 7.5A1.5 1.5 0 0 0 21.5 6M17 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 7a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 17 22a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17 15"></svg:path>`,
})
export class MdiGoogleAssistantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
