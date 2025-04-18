import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStretchingRoundLinearIcon],svg[solar-stretching-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14.5" cy="4.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M19 21.996v-3.947c0-1.776-1.605-3.13-3.373-2.844m-7.679-1.77l-.025-.024c-1.042-1.007-.237-2.626.67-3.268c.907-.643 4.752-1.643 4.752 3.291C13.345 18.13 9.695 22 5 22"></svg:path></svg:g>`,
})
export class SolarStretchingRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
