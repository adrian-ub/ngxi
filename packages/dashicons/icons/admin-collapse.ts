import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAdminCollapseIcon],svg[dashicons-admin-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2.16A7.84 7.84 0 1 1 2.16 10c0-4.33 3.55-7.84 7.84-7.84m2 11.72V6.12L6.18 9.97z"></svg:path>`,
})
export class DashiconsAdminCollapseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
