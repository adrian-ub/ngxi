import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPaperClipLineIcon],svg[majesticons-paper-clip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 6a1 1 0 0 1 1 1v8a7 7 0 1 1-14 0V7a5 5 0 0 1 10 0v8a3 3 0 1 1-6 0V7a1 1 0 1 1 2 0v8a1 1 0 1 0 2 0V7a3 3 0 1 0-6 0v8a5 5 0 0 0 10 0V7a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsPaperClipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
