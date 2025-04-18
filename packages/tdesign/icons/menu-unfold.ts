import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuUnfoldIcon],svg[tdesign-menu-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm20 5.57v4.86L18.113 12zM2 13v-2h15v2zm0 7v-2h20v2z"></svg:path>`,
})
export class TdesignMenuUnfoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
