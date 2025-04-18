import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScanDeleteIcon],svg[material-symbols-light-scan-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8h4l-4-4zm1.9 12.866l-.688-.689l2.1-2.1l-2.1-2.1l.688-.689l2.1 2.1l2.1-2.1l.689.689l-2.075 2.1l2.075 2.1l-.689.689L18 18.79zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v4.812q-.263-.06-.507-.09q-.243-.03-.518-.03q-2.442 0-4.151 1.709t-1.708 4.151q0 .74.207 1.528q.208.787.63 1.42z"></svg:path>`,
})
export class MaterialSymbolsLightScanDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
