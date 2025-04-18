import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNetworkIcon],svg[streamline-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10.5v3m-5 0h10m-5-3a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-5-5h10"></svg:path><svg:path d="M7 10.5c3-3.42 3-6.76 0-10c-2.94 3.12-3 6.44 0 10"></svg:path></svg:g>`,
})
export class StreamlineNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
