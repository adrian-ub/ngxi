import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsScreenoptionsIcon],svg[dashicons-screenoptions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9V3H3v6zm8 0V3h-6v6zm-8 8v-6H3v6zm8 0v-6h-6v6z"></svg:path>`,
})
export class DashiconsScreenoptionsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
