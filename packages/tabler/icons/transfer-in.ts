import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTransferInIcon],svg[tabler-transfer-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 18v3h16V7l-8-4l-8 4v3m0 4h9"></svg:path><svg:path d="m10 11l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerTransferInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
