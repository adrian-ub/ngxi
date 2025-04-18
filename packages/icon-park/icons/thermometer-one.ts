import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkThermometerOneIcon],svg[icon-park-thermometer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C28.9706 44 33 39.9706 33 35C33 31.4663 30.9634 28.4082 28 26.9355V10C28 8 28 4 24 4C20 4 20 8 20 10V26.9355C17.0366 28.4082 15 31.4663 15 35C15 39.9706 19.0294 44 24 44Z"></svg:path>`,
})
export class IconParkThermometerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
