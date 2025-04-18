import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagGuernseyIcon],svg[twemoji-flag-guernsey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#E8112D" d="M21 31h-6V21H0v-6h15V5h6v10h15v6H21z"></svg:path><svg:path fill="#F9DD16" d="M27.5 17H19V9.5l1-1h-4l1 1V17H8.5l-1-1v4l1-1H17v7.5l-1 1h4l-1-1V19h8.5l1 1v-4z"></svg:path>`,
})
export class TwemojiFlagGuernseyIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
