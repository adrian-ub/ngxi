import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsArchiveIcon],svg[dashicons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4v2H1V4zM2 7h16v10H2zm11 3V9H7v1z"></svg:path>`,
})
export class DashiconsArchiveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
