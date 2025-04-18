import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLokasIcon],svg[arcticons-lokas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.076 20.343c9.011 0 8.757-14.223-.915-14.325c-5.82-.03-9.468 3.708-9.661 11.175c.03 10.566 12.191 15.544 18.896 8.493c-5.039-.007-9.489-.469-8.27-5.364z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.924 27.657c-9.011 0-8.757 14.223.915 14.325c5.82.03 9.468-3.708 9.661-11.175c-.03-10.566-12.191-15.544-18.896-8.493c5.039.007 9.489.469 8.27 5.364z"></svg:path>`,
})
export class ArcticonsLokasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
