import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageSelectBoxIcon],svg[mage-select-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.75 6.861c0-3.402.71-4.111 4.111-4.111M2.75 14.056V9.944M6.861 21.25c-3.402 0-4.111-.71-4.111-4.111m11.306 4.111H9.944m11.306-4.111c0 3.402-.71 4.111-4.111 4.111M21.25 9.944v4.112M17.139 2.75c3.402 0 4.111.71 4.111 4.111M9.944 2.75h4.112"></svg:path>`,
})
export class MageSelectBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
