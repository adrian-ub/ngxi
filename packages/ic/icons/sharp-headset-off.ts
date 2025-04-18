import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHeadsetOffIcon],svg[ic-sharp-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c3.87 0 7 3.13 7 7v1h-4v.17l6 6V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.9 6.9 0 0 1 12 4M2.1 2.1L.69 3.51l3.33 3.33A9 9 0 0 0 3 11v9h6v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h8.17l.31.31l1.41-1.41z"></svg:path>`,
})
export class IcSharpHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
