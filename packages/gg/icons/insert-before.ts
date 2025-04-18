import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInsertBeforeIcon],svg[gg-insert-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1m9 15a1 1 0 0 0 1-1v-3h3a1 1 0 1 0 0-2h-3v-3a1 1 0 1 0-2 0v3H8a1 1 0 1 0 0 2h3v3a1 1 0 0 0 1 1"></svg:path>`,
})
export class GgInsertBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
