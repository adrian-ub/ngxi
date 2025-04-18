import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneNetworkTreeIcon],svg[icon-park-twotone-network-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTNetworkTree0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 34h8v8H4zM8 6h32v12H8z"></svg:path><svg:path d="M24 34V18M8 34v-8h32v8"></svg:path><svg:path fill="#555" d="M36 34h8v8h-8zm-16 0h8v8h-8z"></svg:path><svg:path d="M14 12h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNetworkTree0)"></svg:path>`,
})
export class IconParkTwotoneNetworkTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
