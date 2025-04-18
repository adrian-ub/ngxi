import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAlignWideIcon],svg[dashicons-align-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h10V3H5zm12 8V7H3v6zM5 17h10v-2H5z"></svg:path>`,
})
export class DashiconsAlignWideIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
