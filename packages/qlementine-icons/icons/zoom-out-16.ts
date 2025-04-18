import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsZoomOut16Icon],svg[qlementine-icons-zoom-out-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 10.7a5.47 5.47 0 0 1-3.52 1.27c-3.04 0-5.5-2.46-5.5-5.5S3.44.97 6.48.97s5.5 2.46 5.5 5.5c0 1.34-.478 2.57-1.27 3.52l3.92 3.92a.5.5 0 0 1-.707.707l-3.92-3.92zm.98-4.23c0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5s4.5 2.01 4.5 4.5" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsZoomOut16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
