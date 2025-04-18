import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneHeadsetIcon],svg[ic-twotone-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18h1c.55 0 1-.45 1-1v-3h-2zM5 17c0 .55.45 1 1 1h1v-4H5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9M7 14v4H6c-.55 0-1-.45-1-1v-3zm12 3c0 .55-.45 1-1 1h-1v-4h2z"></svg:path>`,
})
export class IcTwotoneHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
