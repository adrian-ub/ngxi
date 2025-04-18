import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFiroIcon],svg[token-branded-firo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8D1B28" d="M12.002 20.999a8.994 8.994 0 0 0 8.342-12.367h-4.38a.56.56 0 0 0-.488.287l-.776 1.4h1.799a.56.56 0 0 1 .562.561v1.687a.56.56 0 0 1-.562.562h-3.373l-2.67 4.772a.56.56 0 0 1-.489.287H5.47a8.97 8.97 0 0 0 6.532 2.81M3.66 15.377a8.994 8.994 0 0 1 14.874-9.556h-4.216a.56.56 0 0 0-.49.287l-2.355 4.21H8.067a.56.56 0 0 0-.562.562v1.687a.56.56 0 0 0 .562.562h1.838L8.81 15.09a.56.56 0 0 1-.489.286z"></svg:path>`,
})
export class TokenBrandedFiroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
