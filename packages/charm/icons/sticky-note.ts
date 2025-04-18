import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmStickyNoteIcon],svg[charm-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.25 13.25h-6.5V2.75h10.5v6.5z"></svg:path><svg:path d="M8.75 13.25v-4.5h4.5"></svg:path></svg:g>`,
})
export class CharmStickyNoteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
