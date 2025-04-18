import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVipOffIcon],svg[tabler-vip-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h2m4 0h12M3 19h16M4 9l2 6h1l2-6m3 3v3m4-3V9h2a2 2 0 1 1 0 4h-1M3 3l18 18"></svg:path>`,
})
export class TablerVipOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
