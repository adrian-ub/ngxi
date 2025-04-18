import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainJuliaIcon],svg[devicon-plain-julia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="29.1" cy="94.2" r="29.1" fill="currentColor"></svg:circle><svg:circle cx="98.9" cy="94.2" r="29.1" fill="currentColor"></svg:circle><svg:circle cx="64" cy="33.8" r="29.1" fill="currentColor"></svg:circle>`,
})
export class DeviconPlainJuliaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
