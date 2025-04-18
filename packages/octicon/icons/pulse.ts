import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPulseIcon],svg[octicon-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.5 8L8.8 5.4L6.6 8.5L5.5 1.6L2.38 8H0v2h3.6l.9-1.8l.9 5.4L9 8.5l1.6 1.5H14V8h-2.5z" fill="currentColor"></svg:path>`,
})
export class OcticonPulseIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
