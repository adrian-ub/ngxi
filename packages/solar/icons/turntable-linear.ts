import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTurntableLinearIcon],svg[solar-turntable-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.172-8.536S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.464C22 4.93 22 7.286 22 12s0 7.071-1.172 8.535S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="m15 17l.894-.447A2 2 0 0 0 17 14.763V10.5"></svg:path><svg:rect width="8" height="8" x="6" y="8" rx="4"></svg:rect><svg:path d="M15.5 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"></svg:path></svg:g>`,
})
export class SolarTurntableLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
