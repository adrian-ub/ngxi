import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteLineIcon],svg[ri-sticky-note-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 15l-6 5.996L4.002 21A1 1 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001zm-.829 9.999L15 15v3.169z"></svg:path>`,
})
export class RiStickyNoteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
