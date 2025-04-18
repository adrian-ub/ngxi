import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWifiMediumIcon],svg[grommet-icons-wifi-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M12 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0"></svg:path><svg:path stroke-opacity=".2" d="M2.1 8.1c5.468-5.467 14.332-5.467 19.8 0" opacity=".8"></svg:path></svg:g>`,
})
export class GrommetIconsWifiMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
