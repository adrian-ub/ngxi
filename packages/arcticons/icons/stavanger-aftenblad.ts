import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStavangerAftenbladIcon],svg[arcticons-stavanger-aftenblad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.338 42.5l20.514-37l3.802 37M17.382 31.598h17.15M8.008 42.5h9.374m13.933 0h8.677M27.728 31.598L26.371 42.5m-4.238 0l2.161-15.538"></svg:path><svg:circle cx="26.449" cy="26.962" r="2.156" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsStavangerAftenbladIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
