import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPrintIcon],svg[tdesign-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v5h3.5v11H19v4H5v-4H.5V7H4zm2 5h12V4H6zM2.5 9v7H5v-2h14v2h2.5V9zM17 16H7v4h10zm0-5.504h2.004V12.5H17z"></svg:path>`,
})
export class TdesignPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
