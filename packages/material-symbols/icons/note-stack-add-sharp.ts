import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoteStackAddSharpIcon],svg[material-symbols-note-stack-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22V6.975h15V17l-5 5zm-2.7-2.925L1.675 4.3L16.45 1.675L17.05 5H5v13.95zm9.2-.575h2v-3h3v-2h-3v-3h-2v3h-3v2h3z"></svg:path>`,
})
export class MaterialSymbolsNoteStackAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
