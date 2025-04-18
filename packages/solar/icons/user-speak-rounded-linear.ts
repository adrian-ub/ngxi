import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakRoundedLinearIcon],svg[solar-user-speak-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:ellipse cx="10" cy="17" rx="7" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2"></svg:path></svg:g>`,
})
export class SolarUserSpeakRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
