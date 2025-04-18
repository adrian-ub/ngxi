import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoKapsyIcon],svg[arcticons-do-kapsy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.486 26.958V43.5H8.261v-39h23.225v2.666"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.646 14.798c6.025 3.213 14.497 3.213 22.093-4.054M17.208 26.958c2.775-3.47 10.663-11.357 22.239-4.82"></svg:path><svg:circle cx="26.775" cy="11.803" r="3.287" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDoKapsyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
