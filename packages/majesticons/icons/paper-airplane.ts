import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPaperAirplaneIcon],svg[majesticons-paper-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2.245 21.655a1 1 0 0 1-.14-1.102l9-18a1 1 0 0 1 1.79 0l9 18a1 1 0 0 1-1.211 1.396L13 19.387V12a1 1 0 1 0-2 0v7.387L3.316 21.95a1 1 0 0 1-1.071-.294z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsPaperAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
