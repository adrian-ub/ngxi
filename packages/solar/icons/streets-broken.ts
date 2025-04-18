import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStreetsBrokenIcon],svg[solar-streets-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.5 20.5L12 12m8.5-8.5L12 12m8.5 8.5L12 12M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path>`,
})
export class SolarStreetsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
