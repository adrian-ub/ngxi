import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDikshaIcon],svg[arcticons-diksha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.848 38.008c-1.917-2.79-3.834-5.58-6.002-7.315s-4.586-2.41-7.004-3.092v-8.973m32.316 0v8.973c-3.619 1.511-7.237 3.023-9.975 5.674c-2.746 2.651-4.603 6.442-6.468 10.225M24 13.24v20.648M13.231 6.063v12.565Q20.831 20.9 24 27.601q3.946-6.7 10.769-8.973V6.063"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5c1.883 0 3.42 1.503 3.42 3.36c0 1.847-1.537 3.35-3.42 3.35c-1.891 0-3.42-1.503-3.42-3.35c0-1.857 1.529-3.36 3.42-3.36"></svg:path>`,
})
export class ArcticonsDikshaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
