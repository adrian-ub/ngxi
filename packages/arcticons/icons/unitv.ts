import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnitvIcon],svg[arcticons-unitv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.857 34.323L18.694 10.877V37.98l13.48-14.023"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.949 43.546c-9.593 4.392-20.955 1.174-26.82-7.595s-4.5-20.5 3.222-27.688C17.073 1.074 28.871.552 37.2 7.029s10.725 18.04 5.658 27.294"></svg:path>`,
})
export class ArcticonsUnitvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
