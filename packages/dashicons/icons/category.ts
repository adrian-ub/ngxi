import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsCategoryIcon],svg[dashicons-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h13v10H2V4h7l2 2H4v9h1z"></svg:path>`,
})
export class DashiconsCategoryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
