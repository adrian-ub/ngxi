import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyRobiIcon],svg[arcticons-my-robi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.49 35.7L24 27.9l-13.51-7.8h0L24 12.3l13.51 7.8v15.6L24 43.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.51 35.7L24 27.9l13.51-7.8M24 12.3L10.49 4.5v15.6M24 12.3v31.2"></svg:path>`,
})
export class ArcticonsMyRobiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
