import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsZoomOutIcon],svg[gridicons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0 3.9 3.1 7 7 7c1.4 0 2.7-.5 3.8-1.2L19 21l2-2l-5.2-5.2c.8-1.1 1.2-2.4 1.2-3.8c0-3.9-3.1-7-7-7s-7 3.1-7 7m2 0c0-2.8 2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5s-5-2.2-5-5"></svg:path><svg:path fill="currentColor" d="M7 9h6v2H7z"></svg:path>`,
})
export class GridiconsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
