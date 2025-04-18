import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBackburgerIcon],svg[mdi-backburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2zm16-7v2H11V6zm0 10v2H11v-2z"></svg:path>`,
})
export class MdiBackburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
