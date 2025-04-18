import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlayPassSharpIcon],svg[material-symbols-play-pass-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-.825 0-1.413.588T10 22H5V2h5q0 .825.588 1.413T12 4q.825 0 1.413-.588T14 2h5v20h-5q0-.825-.588-1.413T12 20Z"></svg:path>`,
})
export class MaterialSymbolsPlayPassSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
