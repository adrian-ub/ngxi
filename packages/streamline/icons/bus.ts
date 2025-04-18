import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBusIcon],svg[streamline-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M3.5 12v1.5m7-1.5v1.5M1.5 7h11"></svg:path><svg:path d="M4 9.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
