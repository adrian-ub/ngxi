import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDoUndoIcon],svg[iconamoon-do-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.707 6.707a1 1 0 0 0-1.414-1.414zM5 9l-.707-.707a1 1 0 0 0 0 1.414zm2.293 3.707a1 1 0 1 0 1.414-1.414zM5 16a1 1 0 0 0 0 2zM7.293 5.293l-3 3l1.414 1.414l3-3zm-3 4.414l3 3l1.414-1.414l-3-3zM5 10h11V8H5zm14 3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm-3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zM5 18h11v-2H5z"></svg:path>`,
})
export class IconamoonDoUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
