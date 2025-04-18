import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundNoteIcon],svg[ic-round-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 9.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v12.01c0 1.1.89 1.99 1.99 1.99H20c1.1 0 2-.9 2-2v-7.17c0-.53-.21-1.04-.59-1.42M15 5.5l5.5 5.5H16c-.55 0-1-.45-1-1z"></svg:path>`,
})
export class IcRoundNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
