import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBandAidsIcon],svg[majesticons-band-aids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="9" height="19" x="2" y="8.364" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="4.5" transform="rotate(-45 2 8.364)"></svg:rect><svg:path fill="currentColor" d="m11.546 18.617l.354-.353L5.535 11.9l-.354.353a4.5 4.5 0 0 0 6.364 6.364zm.707-13.435l-.354.354l6.365 6.364l.353-.354a4.5 4.5 0 1 0-6.364-6.364"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.546 18.617l.354-.353L5.535 11.9l-.354.353a4.5 4.5 0 0 0 6.364 6.364zm.707-13.435l-.354.354l6.365 6.364l.353-.354a4.5 4.5 0 1 0-6.364-6.364m-.353 8.839"></svg:path></svg:g>`,
})
export class MajesticonsBandAidsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
