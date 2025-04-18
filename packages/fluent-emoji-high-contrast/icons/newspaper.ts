import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastNewspaperIcon],svg[fluent-emoji-high-contrast-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 10a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm-.5 4a.5.5 0 0 0 0 1h19a.5.5 0 1 0 0-1zM19 17.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1zm-.5 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1zM5 19a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path d="M8 4a2 2 0 0 0-2 2H3.962C2.252 6 1 7.418 1 9v18c0 2.134 1.683 4 3.923 4h24.094A2 2 0 0 0 31 29V6a2 2 0 0 0-2-2zm18.04 4a.97.97 0 0 1 .939.786q.021.103.022.214v18a2 2 0 0 0 2 2H4.923C3.861 29 3 28.105 3 27V9c0-.552.43-1 .962-1z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastNewspaperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
