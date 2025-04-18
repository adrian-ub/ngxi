import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laChromecastIcon],svg[la-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6c-1.103 0-2 .897-2 2v4h2V8h20v16h-8v2h8c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-2 8v2c5.17 0 9.436 3.942 9.95 8.979Q14 25.482 14 26h2c0-6.617-5.383-12-12-12m0 4v2c3.309 0 6 2.691 6 6h2c0-4.411-3.589-8-8-8m0 4v4h4a4 4 0 0 0-4-4"></svg:path>`,
})
export class LaChromecastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
