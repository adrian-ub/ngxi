import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNetworkIcon],svg[ooui-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="15" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M1 7.4a12 13 0 0 1 18 0l-1.5 1.4a10 11.1 0 0 0-15 0zm3.7 3.2a7 7.3 0 0 1 10.7 0L14 12a5 5.3 0 0 0-7.8 0z"></svg:path>`,
})
export class OouiNetworkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
