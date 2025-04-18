import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNetworkTreeIcon],svg[icon-park-outline-network-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 34h8v8H4zM8 6h32v12H8zm16 28V18"></svg:path><svg:path d="M8 34v-8h32v8m-4 0h8v8h-8zm-16 0h8v8h-8zm-6-22h2"></svg:path></svg:g>`,
})
export class IconParkOutlineNetworkTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
