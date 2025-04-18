import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUndoIcon],svg[rivet-icons-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.5v-1A4.5 4.5 0 0 0 11.5 5H3.914l2-2L4.5 1.586L.086 6L4.5 10.414L5.914 9l-2-2H11.5a2.5 2.5 0 0 1 0 5H4v2h7.5a4.5 4.5 0 0 0 4.389-3.5z"></svg:path>`,
})
export class RivetIconsUndoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
