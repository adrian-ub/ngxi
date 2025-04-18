import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastNotebookIcon],svg[fluent-emoji-high-contrast-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.5 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></svg:path><svg:path d="M4.5 3.029V28.5c0 1.115.921 2 2.034 2h19.432c.88 0 1.635-.55 1.917-1.33l.242-.67H24v-1h4V4a3 3 0 0 0-3-3H6.5c-1.114 0-2 .917-2 2.029M23 28.5H7.045a.51.51 0 0 1-.522-.5c0-.266.223-.5.522-.5H23zM9 25V3h14v22zm15 0V3h1a1 1 0 0 1 1 1v21z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastNotebookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
