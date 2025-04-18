import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWindowMaximizeSolidIcon],svg[la-window-maximize-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 3v12h14V10zm2 2h10v2H11zm0 4h10v4H11z"></svg:path>`,
})
export class LaWindowMaximizeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
