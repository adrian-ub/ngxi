import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumStickyNoteIcon],svg[circum-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.44 3.065H5.56a2.507 2.507 0 0 0-2.5 2.5v12.87a2.507 2.507 0 0 0 2.5 2.5h8.68A2.48 2.48 0 0 0 16 20.2l4.21-4.2a2.5 2.5 0 0 0 .73-1.77V5.565a2.5 2.5 0 0 0-2.5-2.5m-4.38 13.5v3.37h-8.5a1.5 1.5 0 0 1-1.5-1.5V5.565a1.5 1.5 0 0 1 1.5-1.5h12.88a1.5 1.5 0 0 1 1.5 1.5v8.5h-3.38a2.507 2.507 0 0 0-2.5 2.5m1 3.13v-3.13a1.5 1.5 0 0 1 1.5-1.5h3.13Z"></svg:path>`,
})
export class CircumStickyNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
