import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckAllIcon],svg[zmdi-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M375 85L240 221l-30-30L345 55zm91-30l30 30l-256 256l-119-119l30-30l89 89zM0 222l30-30l119 119l-30 30z"></svg:path>`,
})
export class ZmdiCheckAllIcon {
  readonly viewBox = input("0 0 496 384")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
