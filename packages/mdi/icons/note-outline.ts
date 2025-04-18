import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNoteOutlineIcon],svg[mdi-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h5.5L14 4.5zM5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 2v14h14v-7h-7V5z"></svg:path>`,
})
export class MdiNoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
