import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarOffIcon],svg[mdi-star-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-2.9-2.9l.3 1.2l-6.2-3.7L5.8 21l1.6-7L2 9.2l4.9-.4L1.1 3l1.3-1.3l19.7 19.7zM22 9.2l-7.2-.6L12 2l-2 4.8l6.9 6.9z"></svg:path>`,
})
export class MdiStarOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
