import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMicIcon],svg[gg-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 4a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0zm4 0v8a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path><svg:path d="M18 12a6 6 0 0 1-5 5.917V21h4v2H7v-2h4v-3.083A6 6 0 0 1 6 12V9h2v3a4 4 0 0 0 8 0V9h2z"></svg:path></svg:g>`,
})
export class GgMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
