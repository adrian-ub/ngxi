import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHomewavIcon],svg[arcticons-homewav-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.393 24.59a11.044 11.044 0 1 1 15.864-3.458"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.48 43.499l-7.53-7.53c-1.625-1.994 1.781-5.328 3.62-3.495l3.786 3.703l-.084-20.428c.095-3.186 5.033-3.445 5.075-.041l.042 9.277c-.06-2.326 4.623-2.548 4.785-.041l.041 2.548c-.012-2.063 4.92-1.744 5.076.322l-.042 3.162c.09-2.21 5.014-2.223 4.992-.04l.073 10.907A1.646 1.646 0 0 1 36.68 43.5h-.011Z"></svg:path>`,
})
export class ArcticonsHomewavIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
