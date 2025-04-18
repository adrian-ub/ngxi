import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBackburgerIcon],svg[pixelarticons-backburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h10v2H11zm-8 4h2V9h2v2h14v2H7v2H5v-2H3zm4 4v2h2v-2zm0-6V7h2v2zm14 6H11v2h10z"></svg:path>`,
})
export class PixelarticonsBackburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
