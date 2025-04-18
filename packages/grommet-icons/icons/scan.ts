import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsScanIcon],svg[grommet-icons-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M20 10V3H4v7m-3 2h22zm3 1v3zm16 3v-3zM7 21H4v-3m16 0v3h-3m-8 0h6z"></svg:path>`,
})
export class GrommetIconsScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
