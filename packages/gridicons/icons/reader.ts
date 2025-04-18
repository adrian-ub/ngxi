import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderIcon],svg[gridicons-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4zm7 11H5v-1h5zm2-2H5v-1h7zm0-2H5v-1h7zm7 4h-5v-5h5zm0-7H5V6h14z"></svg:path>`,
})
export class GridiconsReaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
