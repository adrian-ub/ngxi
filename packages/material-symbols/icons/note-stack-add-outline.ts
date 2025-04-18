import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoteStackAddOutlineIcon],svg[material-symbols-note-stack-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20V8.975q0-.825.6-1.4T9.025 7H20q.825 0 1.413.587T22 9v8l-5 5H9q-.825 0-1.412-.587T7 20M2.025 6.25q-.15-.825.325-1.487t1.3-.813L14.5 2.025q.825-.15 1.488.325t.812 1.3L17.05 5H15l-.175-1L4 5.925l1 5.65v6.975q-.4-.225-.687-.6t-.363-.85zM9 9v11h7l4-4V9zm4.5 9.5h2v-3h3v-2h-3v-3h-2v3h-3v2h3z"></svg:path>`,
})
export class MaterialSymbolsNoteStackAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
