import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[brandicoHouzzIcon],svg[brandico-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288.672 0v333.329L0 500.012V166.635zM.006 499.988v333.323L288.678 666.58L.036 499.987zM288.672 666.58v333.377l288.666-166.671V499.987zm0-333.227l288.672 166.635V166.635z"></svg:path>`,
})
export class BrandicoHouzzIcon {
  readonly viewBox = input("0 0 577.176 1000")
  readonly width = input("0.58em")
  readonly height = input("1em")
}
