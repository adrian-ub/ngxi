import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularStickyNoteIcon],svg[fa-regular-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106m-128 80v-76.118h76.118zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80z"></svg:path>`,
})
export class FaRegularStickyNoteIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
