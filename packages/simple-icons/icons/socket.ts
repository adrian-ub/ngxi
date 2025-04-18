import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSocketIcon],svg[simple-icons-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.93 11.171c0 5.92 3.778 10.957 9.063 12.829a13.65 13.65 0 0 0 6.513-4.89a13.5 13.5 0 0 0 2.564-7.939V3.274L11.997 0L2.933 3.274v7.897zm7.491-6.09h4.208L13.34 9.47h2.292l-6.264 9.446l1.486-6.858H8.365z"></svg:path>`,
})
export class SimpleIconsSocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
