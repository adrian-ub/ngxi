import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNoteOffIcon],svg[tabler-note-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 20l3.505-3.505m2-2l1.501-1.501M17 13h3V6a2 2 0 0 0-2-2H8m-3.427.6C4.218 4.96 4 5.453 4 6v12a2 2 0 0 0 2 2h7v-6c0-.272.109-.519.285-.699M3 3l18 18"></svg:path>`,
})
export class TablerNoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
