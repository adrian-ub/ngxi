import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBaiduNetdiskIcon],svg[arcticons-baidu-netdisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.81" cy="29.904" r="9.307" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.441" cy="17.321" r="8.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.14 35.639l11.161-12.117c3.288-3.568 12.447-1.495 12.447 5.863c0 9.826-8.692 13.045-15.019 4.747m-4.597-20.767c-2.054 1.236-3.8 2.713-2.62 6.675"></svg:path>`,
})
export class ArcticonsBaiduNetdiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
