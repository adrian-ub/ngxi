import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsSortIcon],svg[dashicons-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H1l5 7zm-2 7h10l-5-7z"></svg:path>`,
})
export class DashiconsSortIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
