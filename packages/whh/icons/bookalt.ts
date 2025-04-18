import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBookaltIcon],svg[whh-bookalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 192q-13 0-22.5-9.5T128 160t9.5-22.5T160 128h704q13 0 22.5 9.5T896 160t-9.5 22.5T864 192zm672 832H160q-66 0-113-47T0 864V160Q0 94 47 47T160 0h704q13 0 22.5 9.5T896 32t-9.5 22.5T864 64H160q-40 0-68 28t-28 68t28 68t68 28h736v704q0 27-18.5 45.5T832 1024"></svg:path>`,
})
export class WhhBookaltIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
