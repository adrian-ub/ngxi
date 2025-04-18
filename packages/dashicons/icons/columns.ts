import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsColumnsIcon],svg[dashicons-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h6V5H3zm8 0h6V5h-6z"></svg:path>`,
})
export class DashiconsColumnsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
