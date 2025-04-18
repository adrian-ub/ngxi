import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneLinearIcon],svg[solar-microphone-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke-linecap="round" d="M13 8h4m-4 3h4m3-1v1a8 8 0 1 1-16 0v-1m8 9v3"></svg:path></svg:g>`,
})
export class SolarMicrophoneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
