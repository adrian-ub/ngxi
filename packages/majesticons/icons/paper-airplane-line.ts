import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPaperAirplaneLineIcon],svg[majesticons-paper-airplane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.245 21.655a1 1 0 0 1-.14-1.102l9-18a1 1 0 0 1 1.79 0l9 18a1 1 0 0 1-1.211 1.396L12 19.054l-8.684 2.895a1 1 0 0 1-1.071-.294zM13 17.28l6.026 2.009L12 5.236L4.974 19.288L11 17.279V12a1 1 0 1 1 2 0v5.28z"></svg:path></svg:g>`,
})
export class MajesticonsPaperAirplaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
