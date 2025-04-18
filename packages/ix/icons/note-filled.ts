import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNoteFilledIcon],svg[ix-note-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v277.333L341.333 448H64V64zM277.333 277.333V448H320V320h128v-42.667z"></svg:path>`,
})
export class IxNoteFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
