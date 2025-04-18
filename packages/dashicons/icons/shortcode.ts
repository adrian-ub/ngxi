import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsShortcodeIcon],svg[dashicons-shortcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14H4V6h2V4H2v12h4zm1.1 3h2.1l3.7-14h-2.1zM14 4v2h2v8h-2v2h4V4z"></svg:path>`,
})
export class DashiconsShortcodeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
