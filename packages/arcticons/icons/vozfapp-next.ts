import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVozfappNextIcon],svg[arcticons-vozfapp-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.634 4.5l13.744 39l8.63-8.608l-7.458-22.636zm22.375 30.392l6.357-6.483l-1.99-5.526l-10.077-5.32"></svg:path>`,
})
export class ArcticonsVozfappNextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
