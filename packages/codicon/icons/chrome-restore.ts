import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconChromeRestoreIcon],svg[codicon-chrome-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 5v9h9V5zm8 8H4V6h7z"></svg:path><svg:path fill-rule="evenodd" d="M5 5h1V4h7v7h-1v1h2V3H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconChromeRestoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
