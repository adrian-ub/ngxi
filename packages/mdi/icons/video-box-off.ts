import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideoBoxOffIcon],svg[mdi-video-box-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h.73L14 15.27V16H6M2.27 1L1 2.27l2 2.01c-.59.34-1 .98-1 1.72v12a2 2 0 0 0 2 2h14.73l2 2L22 20.73M20 4H7.82l4 4H14v2.18l.57.57L18 8v6.18l4 3.99V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiVideoBoxOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
