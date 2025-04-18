import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInsertBeforeOIcon],svg[gg-insert-before-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2zm4 12a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 14a8 8 0 1 0 16 0a8 8 0 0 0-16 0m8-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInsertBeforeOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
