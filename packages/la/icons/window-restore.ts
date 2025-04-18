import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWindowRestoreIcon],svg[la-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5 2v4H9v10h11v-4h3V9zm2 2h7v1h-7zm0 3h7v3h-7zm-3 1h1v1.031h-1zm0 3.031h1V19h6v2h-7z"></svg:path>`,
})
export class LaWindowRestoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
