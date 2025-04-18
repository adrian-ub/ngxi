import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsBookIcon],svg[dashicons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3h2v16H5c-1.66 0-3-1.34-3-3V4c0-1.66 1.34-3 3-3h9v14H5c-.55 0-1 .45-1 1s.45 1 1 1h11z"></svg:path>`,
})
export class DashiconsBookIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
