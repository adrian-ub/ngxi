import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNetworkTreeIcon],svg[icon-park-network-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="8" x="4" y="34" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="32" height="12" x="8" y="6" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" d="M24 34V18"></svg:path><svg:path stroke="#000" d="M8 34V26H40V34"></svg:path><svg:rect width="8" height="8" x="36" y="34" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="8" height="8" x="20" y="34" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M14 12H16"></svg:path></svg:g>`,
})
export class IconParkNetworkTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
