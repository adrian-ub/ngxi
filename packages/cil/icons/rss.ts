import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilRssIcon],svg[cil-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66 256v32c88.225 0 160 71.776 160 160h32c0-105.869-86.131-192-192-192"></svg:path><svg:path fill="currentColor" d="M66 140v32c152.187 0 276 123.813 276 276h32a305.98 305.98 0 0 0-90.211-217.789A306 306 0 0 0 66 140"></svg:path><svg:path fill="currentColor" d="M456.674 282.955a422.6 422.6 0 0 0-90.861-134.768A422.72 422.72 0 0 0 66 24v32c216.149 0 392 175.851 392 392h32a421.4 421.4 0 0 0-33.326-165.045M90 360a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32"></svg:path>`,
})
export class CilRssIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
