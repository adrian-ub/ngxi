import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPuzzleOutlineIcon],svg[lsicon-puzzle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 13.5h3v-3h.5a1.5 1.5 0 0 0 0-3h-.5V4h-3m0 9.5H9m.5 0a2 2 0 1 0-4 0m4-9.5H9m.5 0a2 2 0 1 0-4 0m0 0h-3v2.5H4a1.5 1.5 0 1 1 0 3H2.5v4h3m0-9.5H6m-.5 9.5H6"></svg:path>`,
})
export class LsiconPuzzleOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
