import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPanoramaIcon],svg[picon-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1q4 2 8 0v6Q4 5 0 7m5-5L3 4L2 3L1 5h6"></svg:path>`,
})
export class PiconPanoramaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
