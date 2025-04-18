import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTransferOutIcon],svg[tabler-transfer-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 19v2h16V7l-8-4l-8 4v2m9 5H4"></svg:path><svg:path d="m7 11l-3 3l3 3"></svg:path></svg:g>`,
})
export class TablerTransferOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
