import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoteStackSharpIcon],svg[material-symbols-note-stack-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22V6.975h15V17l-5 5zm13-6h-4v4zM4.3 19.075L1.675 4.3L16.45 1.675L17.05 5H5v13.95z"></svg:path>`,
})
export class MaterialSymbolsNoteStackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
