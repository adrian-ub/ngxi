import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNoteOffOutlineIcon],svg[mdi-note-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v3.8l3.2 3.2H19v3.8l2 2V9l-6-6H6.2l2 2zm2-.5l5.5 5.5H14zm6.7 15.55v-.01l-1.7-1.7v.01L12.66 12l-.66-.66v.01L6.14 5.5L2.39 1.73L1.11 3L3 4.9V19a2 2 0 0 0 2 2h14.1l1.74 1.73l1.27-1.27zM5 19V6.89L17.11 19z"></svg:path>`,
})
export class MdiNoteOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
