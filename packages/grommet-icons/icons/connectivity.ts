import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsConnectivityIcon],svg[grommet-icons-connectivity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8v4l3 3l6-6l-4-4H5L2.5 3M17 7l3 3v7m-7-6l3 3m-5-1l3 3m-7 1l3 3h10"></svg:path>`,
})
export class GrommetIconsConnectivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
