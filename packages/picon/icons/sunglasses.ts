import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSunglassesIcon],svg[picon-sunglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2Q7 8 4 3Q1 8 0 2"></svg:path>`,
})
export class PiconSunglassesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
