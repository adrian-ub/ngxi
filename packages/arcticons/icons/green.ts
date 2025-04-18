import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGreenIcon],svg[arcticons-green-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.586 9.88h26.897v18.827a12.13 12.13 0 0 1-5.38 9.414L28.035 43.5l-8.07-5.38a12.13 12.13 0 0 1-5.379-9.413Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.897 32.741a12.13 12.13 0 0 1-5.38-9.413V4.5h26.897"></svg:path>`,
})
export class ArcticonsGreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
