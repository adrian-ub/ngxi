import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoteItIcon],svg[arcticons-note-it-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.038 12.488a1.84 1.84 0 0 0-1.842-1.842H8.804a1.84 1.84 0 0 0-1.842 1.842v23.024a1.84 1.84 0 0 0 1.842 1.842h30.392a1.84 1.84 0 0 0 1.842-1.842Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.06 10.646l-.582-2.176a1.84 1.84 0 0 0-2.256-1.302l-12.98 3.478M41.038 33.26l1.096-.294a1.84 1.84 0 0 0 1.303-2.256l-2.4-8.953M9.94 37.354l.582 2.176a1.84 1.84 0 0 0 2.256 1.302l12.98-3.478M6.962 14.74l-1.096.294a1.84 1.84 0 0 0-1.303 2.256l2.414 9.008m5.971-10.126h22.103m-22.103 5.219h22.103m-22.103 5.218h22.103m-22.103 5.219H24"></svg:path>`,
})
export class ArcticonsNoteItIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
