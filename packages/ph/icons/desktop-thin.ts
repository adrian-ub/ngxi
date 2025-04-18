import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDesktopThinIcon],svg[ph-desktop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h76v24H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-24h76a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M48 52h160a12 12 0 0 1 12 12v84H36V64a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-20h184v20a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDesktopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
