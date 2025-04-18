import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageClockIcon],svg[pixelarticons-message-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v4h2V2zM8 16H6v2H4v2h2v-2h2zm6-2h2v2h2v2h-4zm6-4h-8v2h-2v8h2v2h8v-2h2v-8h-2zm0 2v8h-8v-8z"></svg:path>`,
})
export class PixelarticonsMessageClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
