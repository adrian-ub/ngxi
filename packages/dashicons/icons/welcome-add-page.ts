import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsWelcomeAddPageIcon],svg[dashicons-welcome-add-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7V4h-2V2h-3v1H3v15h11V9h1V7zm-1-2v1h-2v2h-1V6h-2V5h2V3h1v2z"></svg:path>`,
})
export class DashiconsWelcomeAddPageIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
