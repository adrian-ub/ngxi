import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsZoomInIcon],svg[gridicons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.8 13.8c.7-1.1 1.2-2.4 1.2-3.8c0-3.9-3.1-7-7-7s-7 3.1-7 7s3.1 7 7 7c1.4 0 2.7-.4 3.8-1.2L19 21l2-2zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"></svg:path><svg:path fill="currentColor" d="M11 7H9v2H7v2h2v2h2v-2h2V9h-2z"></svg:path>`,
})
export class GridiconsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
