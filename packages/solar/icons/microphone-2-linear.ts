import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone2LinearIcon],svg[solar-microphone-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke-linecap="round" d="M13.5 8H17m-3.5 3H17M7 8h2m-2 3h2m11-1v1a8 8 0 1 1-16 0v-1m8 9v3"></svg:path></svg:g>`,
})
export class SolarMicrophone2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
