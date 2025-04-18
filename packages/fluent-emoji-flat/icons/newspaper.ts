import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatNewspaperIcon],svg[fluent-emoji-flat-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M4 7a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H4a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3"></svg:path><svg:path fill="#F3EEF8" d="M28 10a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h25.5a1.5 1.5 0 0 1-1.5-1.5z"></svg:path><svg:path fill="#998EA4" d="M4 11a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 3.5a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 0 1h-21a.5.5 0 0 1-.5-.5M19.5 17a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M6 17a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatNewspaperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
