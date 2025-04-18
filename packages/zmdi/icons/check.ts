import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckIcon],svg[zmdi-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119 282L346 55l29 30l-256 256L0 222l30-30z"></svg:path>`,
})
export class ZmdiCheckIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
