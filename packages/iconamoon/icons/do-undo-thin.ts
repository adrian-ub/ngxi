import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDoUndoThinIcon],svg[iconamoon-do-undo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.354 6.354a.5.5 0 1 0-.708-.708zM5 9l-.354-.354a.5.5 0 0 0 0 .708zm2.646 3.354a.5.5 0 0 0 .708-.708zM5 16.5a.5.5 0 0 0 0 1zM7.646 5.646l-3 3l.708.708l3-3zm-3 3.708l3 3l.708-.708l-3-3zM5 9.5h11v-1H5zM19.5 13a3.5 3.5 0 0 1-3.5 3.5v1a4.5 4.5 0 0 0 4.5-4.5zM16 9.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 16 8.5zm-11 8h11v-1H5z"></svg:path>`,
})
export class IconamoonDoUndoThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
