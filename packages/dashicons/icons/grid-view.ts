import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsGridViewIcon],svg[dashicons-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1m7.01 7.99v-6H3v6zm8 0v-6h-6v6zm-8 8.01v-6H3v6zm8 0v-6h-6v6z"></svg:path>`,
})
export class DashiconsGridViewIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
