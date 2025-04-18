import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNeedleOffIcon],svg[mdi-needle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3L8 9.9l-3.9 3.9l2.1 2.1L3.1 19v2.8l4.5-4.5l2.1 2.1l3.9-3.9l7.2 7.2zm-10.9-6.3l-1.4 1.4L7 13.8l2.5-2.5l1.4 1.4l-1.1 1.1zm.7-6.5l-1.4-1.4L14 3.9L16.1 6l1.4-1.4l-1.4-1.4l1.4-1.4L21.8 6l-1.4 1.4L18.9 6l-1.4 1.4l2.1 2.1l-3.4 3.5l-2.8-2.8l.6-.7l1.4 1.4l1.4-1.4L14 6.7z"></svg:path>`,
})
export class MdiNeedleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
