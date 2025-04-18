import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVibulkijIcon],svg[arcticons-vibulkij-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.249 23.569v17.52H13.944V23.866m0-12.892V6.91H34.25v4.063m8.251 0H30.615L24 21.072l-6.615-10.097H5.5L24 39.22z"></svg:path>`,
})
export class ArcticonsVibulkijIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
