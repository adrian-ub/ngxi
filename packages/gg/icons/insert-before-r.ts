import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInsertBeforeRIcon],svg[gg-insert-before-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2zm4 12a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3zm13 1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInsertBeforeRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
