import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCopperIud24pxIcon],svg[healthicons-copper-iud-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 2h2.066l-1 2H5a1 1 0 0 1 0-2m3.066 2h-.882l1-2h.882zm1.118 0H11v2.691l2 1V4h1.816l-1-2H13a2 2 0 0 0-1 .268A2 2 0 0 0 11 2h-.816z"></svg:path><svg:path fill-rule="evenodd" d="M11 16.17a3.001 3.001 0 1 0 2 0v-3.36l-2-1zM11 19a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path><svg:path d="M17.934 4H19a1 1 0 1 0 0-2h-2.066zm-1.118 0h-.882l-1-2h.882zM11 8.691v-.882l2 1v.882zm0 1.118v.882l2 1v-.882z"></svg:path></svg:g>`,
})
export class HealthiconsCopperIud24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
