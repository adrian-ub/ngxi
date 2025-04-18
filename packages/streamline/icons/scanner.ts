import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScannerIcon],svg[streamline-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5H1.429a.93.93 0 0 1-.929-.928V10.25m13 0v2.322a.93.93 0 0 1-.929.928H10.25m0-13h2.321a.93.93 0 0 1 .929.929V3.75m-13 0V1.429A.93.93 0 0 1 1.429.5H3.75M.5 7h13"></svg:path>`,
})
export class StreamlineScannerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
