import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintLineSlantDownIcon],svg[pepicons-print-line-slant-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.6 1.6a1.5 1.5 0 0 1 2.122 0l15.556 15.557a1.5 1.5 0 1 1-2.121 2.121L1.6 3.722a1.5 1.5 0 0 1 0-2.121" opacity=".2"></svg:path><svg:path d="M.454.454a.5.5 0 0 1 .707 0l18.385 18.385a.5.5 0 0 1-.707.707L.454 1.16a.5.5 0 0 1 0-.707"></svg:path></svg:g>`,
})
export class PepiconsPrintLineSlantDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
