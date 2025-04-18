import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconZoomOut16Icon],svg[octicon-zoom-out-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5"></svg:path><svg:path fill="currentColor" d="M0 7.5a7.5 7.5 0 1 1 13.307 4.747l2.473 2.473a.749.749 0 1 1-1.06 1.06l-2.473-2.473A7.5 7.5 0 0 1 0 7.5m7.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class OcticonZoomOut16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
