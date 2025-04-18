import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplegalleryIcon],svg[arcticons-simplegallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 29.44a12.28 12.28 0 1 1 18.34-10.69h0a12.26 12.26 0 0 1-2.24 7.07"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.72 20.74l-3.27 4.34l-1.3-1.71a1 1 0 0 0-1.55 0L5.82 39a1.58 1.58 0 0 0 1.26 2.53h33.86A1.58 1.58 0 0 0 42.18 39l-9.37-12.46a1 1 0 0 0-1.56 0l-.8 1.07l-5.18-6.87a1 1 0 0 0-1.55 0"></svg:path>`,
})
export class ArcticonsSimplegalleryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
