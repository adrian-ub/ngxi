import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScanIcon],svg[carbon-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 29H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16v2H5v22h16Z"></svg:path><svg:path fill="currentColor" d="M15 9h2v14h-2zm12 0h2v14h-2zm-6 0h2v14h-2z"></svg:path>`,
})
export class CarbonScanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
