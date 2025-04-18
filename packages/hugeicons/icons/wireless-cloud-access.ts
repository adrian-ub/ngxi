import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWirelessCloudAccessIcon],svg[hugeicons-wireless-cloud-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.478 8.398h.022c2.485 0 4.5 1.98 4.5 4.423a4.4 4.4 0 0 1-2 3.679m-2.522-8.102q.021-.243.022-.492C17.5 4.921 15.038 2.5 12 2.5c-2.877 0-5.238 2.171-5.48 4.937m10.958.961a5.33 5.33 0 0 1-1.235 2.949M6.52 7.437C3.984 7.675 2 9.774 2 12.33c0 1.759.94 3.302 2.352 4.17M6.52 7.437q.237-.022.48-.022c1.126 0 2.165.366 3 .983m-2 7.58c1.149-.935 2.52-1.478 3.995-1.478c1.478 0 2.854.547 4.005 1.487M14.174 18.5a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 21.5h.006" color="currentColor"></svg:path>`,
})
export class HugeiconsWirelessCloudAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
