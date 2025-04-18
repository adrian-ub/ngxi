import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBandAidsLineIcon],svg[majesticons-band-aids-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="9" height="19" x="2" y="8.364" rx="4.5" transform="rotate(-45 2 8.364)"></svg:rect><svg:path d="m11.9 18.264l-.354.353a4.5 4.5 0 0 1-6.364 0v0a4.5 4.5 0 0 1 0-6.364l.354-.353M11.9 5.536l.353-.354a4.5 4.5 0 0 1 6.364 0v0a4.5 4.5 0 0 1 0 6.364l-.354.354M11.9 14.021"></svg:path></svg:g>`,
})
export class MajesticonsBandAidsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
