import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintLineSlantUpIcon],svg[pepicons-print-line-slant-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.6 19.278a1.5 1.5 0 0 1 0-2.121L17.158 1.6a1.5 1.5 0 1 1 2.121 2.122L3.722 19.278a1.5 1.5 0 0 1-2.121 0" opacity=".2"></svg:path><svg:path d="M.454 19.546a.5.5 0 0 1 0-.707L18.839.454a.5.5 0 1 1 .707.707L1.16 19.546a.5.5 0 0 1-.707 0"></svg:path></svg:g>`,
})
export class PepiconsPrintLineSlantUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
