import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbon3dCursorAltIcon],svg[carbon-3d-cursor-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4z" fill="currentColor"></svg:path><svg:path d="M15 7h2v7h-2z" fill="currentColor"></svg:path><svg:path d="M7 15h7v2H7z" fill="currentColor"></svg:path><svg:path d="M15 18h2v7h-2z" fill="currentColor"></svg:path><svg:path d="M18 15h7v2h-7z" fill="currentColor"></svg:path>`,
})
export class Carbon3dCursorAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
