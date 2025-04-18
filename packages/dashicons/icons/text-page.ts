import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTextPageIcon],svg[dashicons-text-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v18h14V1zm9 13H6v-1h6zm2-3H6v-1h8zm0-3H6V7h8zm0-3H6V4h8z"></svg:path>`,
})
export class DashiconsTextPageIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
