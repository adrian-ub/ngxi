import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignJumpIcon],svg[tdesign-jump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h7.09v2H5v14h14v-5.09h2V21zm7.586-9l7-7H13V3h8v8h-2V6.414l-7 7z"></svg:path>`,
})
export class TdesignJumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
