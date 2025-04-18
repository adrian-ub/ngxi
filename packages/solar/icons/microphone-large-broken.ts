import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneLargeBrokenIcon],svg[solar-microphone-large-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M18 8v5a6 6 0 0 1-12 0V8a6 6 0 0 1 10.472-4"></svg:path><svg:path d="M10 6.5s.473-.5 2-.5s2 .5 2 .5m-4 3s.473-.5 2-.5s2 .5 2 .5m7 1.5v2a9 9 0 0 1-5 8.064M3 11v2a9 9 0 0 0 9 9"></svg:path></svg:g>`,
})
export class SolarMicrophoneLargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
