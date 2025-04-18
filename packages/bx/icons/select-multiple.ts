import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSelectMultipleIcon],svg[bx-select-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 16V4h12l.002 12z"></svg:path><svg:path fill="currentColor" d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4zm8.933 3.519l-1.726-1.726l-1.414 1.414l3.274 3.274l5.702-6.84l-1.538-1.282z"></svg:path>`,
})
export class BxSelectMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
