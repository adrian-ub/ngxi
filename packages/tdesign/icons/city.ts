import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCityIcon],svg[tdesign-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1.5l8 3.333V10h12v12H2zM10 12v8h2v-5h6v5h2v-8zm6 8v-3h-2v3zm-8 0V6.167L4 4.5V20z"></svg:path>`,
})
export class TdesignCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
