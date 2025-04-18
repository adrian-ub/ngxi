import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMouseAltIcon],svg[bxs-mouse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v8h6V8c0-3.309-2.691-6-6-6M5 16c0 3.309 2.691 6 6 6h2c3.309 0 6-2.691 6-6v-4H5zm0-8v2h6V2C7.691 2 5 4.691 5 8"></svg:path>`,
})
export class BxsMouseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
