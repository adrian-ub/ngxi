import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBrandHomeAssistantIcon],svg[humbleicons-brand-home-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h7a1 1 0 0 0 1-1v-7.586a1 1 0 0 0-.293-.707l-7-7a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0-.293.707V19a1 1 0 0 0 1 1zm0 0v-2.5m0 2.5l-3-3m3 .5v-7m0 7l2.5-2.5M12 10.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-8 2a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class HumbleiconsBrandHomeAssistantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
