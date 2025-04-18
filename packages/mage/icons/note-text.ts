import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageNoteTextIcon],svg[mage-note-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.221 17.084v-8.11a4.166 4.166 0 0 0-4.166-4.197h-8.11A4.166 4.166 0 0 0 3.78 8.944v8.11a4.166 4.166 0 0 0 4.166 4.196h8.11a4.166 4.166 0 0 0 4.166-4.166M16.055 6.805V2.75m-8.11 4.055V2.75m-.507 8.11h9.124m-9.124 5.068h9.124"></svg:path>`,
})
export class MageNoteTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
