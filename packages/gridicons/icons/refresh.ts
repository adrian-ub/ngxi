import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsRefreshIcon],svg[gridicons-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.91 14c-.478 2.833-2.943 5-5.91 5c-3.308 0-6-2.692-6-6s2.692-6 6-6h2.172l-2.086 2.086L13.5 10.5L18 6l-4.5-4.5l-1.414 1.414L14.172 5H12a8 8 0 0 0 0 16c4.079 0 7.438-3.055 7.931-7z"></svg:path>`,
})
export class GridiconsRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
