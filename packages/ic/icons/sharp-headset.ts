import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadsetIcon],svg[ic-sharp-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-4v8h6V10c0-5.17-4.36-9.32-9.6-8.98"></svg:path>`,
})
export class IcSharpHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
