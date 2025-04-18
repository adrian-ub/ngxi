import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPaperClipIcon],svg[majesticons-paper-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6zm13 7a1 1 0 1 0-2 0v4a5 5 0 0 1-10 0V9a3 3 0 0 1 6 0v4a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v4a3 3 0 1 0 6 0V9A5 5 0 0 0 5 9v4a7 7 0 1 0 14 0V9z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsPaperClipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
