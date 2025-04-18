import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMenuIcon],svg[ooui-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"></svg:path>`,
})
export class OouiMenuIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
