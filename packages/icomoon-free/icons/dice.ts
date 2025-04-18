import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeDiceIcon],svg[icomoon-free-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3h-8A2.507 2.507 0 0 0 3 5.5v8C3 14.875 4.125 16 5.5 16h8c1.375 0 2.5-1.125 2.5-2.5v-8C16 4.125 14.875 3 13.5 3m-7 11a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 14m0-6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 8m3 3a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 9.5 11m3 3a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12.5 14m0-6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12.5 8m.449-6A2.51 2.51 0 0 0 10.5 0h-8A2.507 2.507 0 0 0 0 2.5v8c0 1.204.862 2.216 2 2.449V3c0-.55.45-1 1-1z"></svg:path>`,
})
export class IcomoonFreeDiceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
