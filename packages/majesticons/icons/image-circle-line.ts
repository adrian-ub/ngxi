import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsImageCircleLineIcon],svg[majesticons-image-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 16c1.403-.234 3.637-.293 5.945.243M16 21c-1.704-2.768-4.427-4.148-7.055-4.757m0 0C10.895 13.985 14.558 12 21 12h1M8.5 7C8 7 7 7.3 7 8.5S8 10 8.5 10S10 9.7 10 8.5S9 7 8.5 7"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MajesticonsImageCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
