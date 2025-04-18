import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAdminNetworkIcon],svg[dashicons-admin-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.95 2.58a4.985 4.985 0 0 1 0 7.07c-1.51 1.51-3.75 1.84-5.59 1.01l-1.87 3.31l-2.99.31L5 18H2l-1-2l7.95-7.69c-.92-1.87-.62-4.18.93-5.73a4.985 4.985 0 0 1 7.07 0m-2.51 3.79c.74 0 1.33-.6 1.33-1.34a1.33 1.33 0 1 0-2.66 0c0 .74.6 1.34 1.33 1.34"></svg:path>`,
})
export class DashiconsAdminNetworkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
