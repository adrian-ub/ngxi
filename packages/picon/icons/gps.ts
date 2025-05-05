import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGpsIcon],svg[picon-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3h1l2-2V0h2v1l2 2h1v2H7L5 7v1H3V7L1 5m3 1c2.5 0 2.5-4 0-4S1.5 6 4 6m0-1L3 4l1-1l1 1"></svg:path>`,
})
export class PiconGpsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
