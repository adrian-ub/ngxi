import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlayPassIcon],svg[material-symbols-play-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-.825 0-1.413.588T10 22H7q-.825 0-1.413-.588T5 20V4q0-.825.588-1.413T7 2h3q0 .825.588 1.413T12 4q.825 0 1.413-.588T14 2h3q.825 0 1.413.588T19 4v16q0 .825-.588 1.413T17 22h-3q0-.825-.588-1.413T12 20Z"></svg:path>`,
})
export class MaterialSymbolsPlayPassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
