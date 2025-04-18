import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRetouchePhotoIcon],svg[arcticons-retouche-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M39.047 5.36a2.479 2.479 0 1 1-.054-.06M15.121 31.478V43.5l-6.77-3.856V18.161"></svg:path><svg:path d="M8.358 18.378a14.267 14.267 0 1 1 6.816 13.063"></svg:path><svg:path d="M28.354 14.294a7.602 7.602 0 1 1-.167-.187"></svg:path></svg:g>`,
})
export class ArcticonsRetouchePhotoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
