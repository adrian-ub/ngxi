import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsOfflineIcon],svg[gridicons-offline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h8l-4 6h4L6 21l4-9H6z"></svg:path>`,
})
export class GridiconsOfflineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
