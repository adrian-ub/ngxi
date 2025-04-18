import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEditNoteIcon],svg[ic-sharp-edit-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13l1.41-1.41l2.12 2.12l-1.41 1.41zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3z"></svg:path>`,
})
export class IcSharpEditNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
