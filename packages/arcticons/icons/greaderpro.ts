import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGreaderproIcon],svg[arcticons-greaderpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30 42.5h-7.95v-6.82A9.67 9.67 0 0 0 12.38 26H5.5v-8h6.82A17.66 17.66 0 0 1 30 35.68h0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 42.5h-8v-6.82a22.24 22.24 0 0 0-22.18-22.22H5.5v-8h6.82A30.18 30.18 0 0 1 42.5 35.68Z"></svg:path><svg:circle cx="11.2" cy="36.8" r="5.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGreaderproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
