import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsFullscreenExitAltIcon],svg[dashicons-fullscreen-exit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.4 2L2 3.4l2.8 2.8L3 8h5V3L6.2 4.8zm11.8 4.2L18 3.4L16.6 2l-2.8 2.8L12 3v5h5zM4.8 13.8L2 16.6L3.4 18l2.8-2.8L8 17v-5H3zM17 12h-5v5l1.8-1.8l2.8 2.8l1.4-1.4l-2.8-2.8z"></svg:path>`,
})
export class DashiconsFullscreenExitAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
