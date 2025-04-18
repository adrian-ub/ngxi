import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsLeftrightIcon],svg[dashicons-leftright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.03L9 6v8zM11 6l6 4.03L11 14z"></svg:path>`,
})
export class DashiconsLeftrightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
