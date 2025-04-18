import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggScanIcon],svg[gg-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v18h-2zM5 8a1 1 0 0 1 1-1h3V5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v-2H6a1 1 0 0 1-1-1zm14 0a1 1 0 0 0-1-1h-3V5h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1z"></svg:path>`,
})
export class GgScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
