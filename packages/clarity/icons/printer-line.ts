import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPrinterLineIcon],svg[clarity-printer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 9h-2V5H9v4H7a4 4 0 0 0-4 4v11h3.92v-1.91H5V13a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v9h-1.92v2H33V13a4 4 0 0 0-4-4m-4 0H11V7h14Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M28 18H8a1 1 0 0 0 0 2h1v12h18V20h1a1 1 0 0 0 0-2m-3 12H11V20h14Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M27 13.04h2v2h-2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPrinterLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
