import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignScanIcon],svg[tdesign-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zM2 11h20v2H2zm2 4v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
