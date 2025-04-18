import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNoteMultipleOutlineIcon],svg[mdi-note-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v16h18v2H3a2 2 0 0 1-2-2V6zm13 3h5.5L16 3.5zM7 2h10l6 6v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v14h14v-7h-7V4z"></svg:path>`,
})
export class MdiNoteMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
