import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTornadoIcon],svg[picon-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L1 3h4l1 1M4 6L3 5h4v1M0 2V1h7L6 2M3 8l1-1h2L5 8"></svg:path>`,
})
export class PiconTornadoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
