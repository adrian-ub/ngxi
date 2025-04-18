import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTwitchIcon],svg[dashicons-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.7 2L2 4.6v11.8h3.2V18H7l1.8-1.6h2.9l5.7-5.2V2zM16 10.5l-2.5 2.3h-4l-2.2 2v-2H4.2V3.3H16zm-2.5-4.6h-1.4v3.9h1.4zm-4 0H8.1v3.9h1.4z" clip-rule="evenodd"></svg:path>`,
})
export class DashiconsTwitchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
