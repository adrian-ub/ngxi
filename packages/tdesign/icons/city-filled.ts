import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCityFilledIcon],svg[tdesign-city-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1.5l8 3.333V10h12v12h-3.5v-6h-7v6H2zM8 20V6.167L4 4.5V20z"></svg:path><svg:path fill="currentColor" d="M16.5 22h-3v-4h3z"></svg:path>`,
})
export class TdesignCityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
