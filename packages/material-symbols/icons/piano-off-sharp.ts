import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPianoOffSharpIcon],svg[material-symbols-piano-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L18.15 21H3V5.85L1.375 4.225L2.8 2.8l18.4 18.4zM21 18.15l-2-2V5h-2v9.15l-4-4V5h-2v3.15L5.85 3H21zM5 19h3.25v-4.5H7V9.85l-2-2zm4.75 0h4.5v-1.9l-3.3-3.3v.7h-1.2zm6 0h.4l-.4-.4z"></svg:path>`,
})
export class MaterialSymbolsPianoOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
