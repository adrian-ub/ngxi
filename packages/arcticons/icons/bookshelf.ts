import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBookshelfIcon],svg[arcticons-bookshelf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.997 10.658L6.241 19.027l17.756 5.588l17.762-8.058z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.241 25.39l17.756 5.589l17.762-8.059"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.241 31.754l17.756 5.588l17.762-8.058M24.261 15.186l4.478 1.487M6.242 19.027c-2.411.985-2.232 5.661 0 6.364m35.517 3.894c2.41-.985 2.23-5.662 0-6.364"></svg:path>`,
})
export class ArcticonsBookshelfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
