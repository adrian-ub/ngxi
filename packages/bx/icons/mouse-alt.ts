import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMouseAltIcon],svg[bx-mouse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2C7.691 2 5 4.691 5 8v8c0 3.309 2.691 6 6 6h2c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m-2 2v6H7V8c0-2.206 1.794-4 4-4m6 12c0 2.206-1.794 4-4 4h-2c-2.206 0-4-1.794-4-4v-4h10zm-4-6V4c2.206 0 4 1.794 4 4v2z"></svg:path>`,
})
export class BxMouseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
