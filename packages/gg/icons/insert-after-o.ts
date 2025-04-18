import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInsertAfterOIcon],svg[gg-insert-after-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 8a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V6a1 1 0 1 0-2 0v2z"></svg:path><svg:path fill-rule="evenodd" d="M4 9a8 8 0 1 1 16 0A8 8 0 0 1 4 9m8 6a6 6 0 1 1 0-12a6 6 0 0 1 0 12" clip-rule="evenodd"></svg:path><svg:path d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgInsertAfterOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
