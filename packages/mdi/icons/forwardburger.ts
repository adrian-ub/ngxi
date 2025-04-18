import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiForwardburgerIcon],svg[mdi-forwardburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H3v-2h16l-4-4l1.4-1.4l6.4 6.4l-6.4 6.4L15 17zM3 6h10v2H3zm10 10v2H3v-2z"></svg:path>`,
})
export class MdiForwardburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
