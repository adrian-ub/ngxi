import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsImageCirclePlusLineIcon],svg[majesticons-image-circle-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 16c1.403-.234 3.637-.293 5.945.243M16 21c-1.704-2.768-4.427-4.148-7.055-4.757m0 0C10.895 13.985 14.558 12 21 12h1M8.5 7C8 7 7 7.3 7 8.5S8 10 8.5 10S10 9.7 10 8.5S9 7 8.5 7"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m7 0v3m0 3V5m0 0h3m-3 0h-3"></svg:path></svg:g>`,
})
export class MajesticonsImageCirclePlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
