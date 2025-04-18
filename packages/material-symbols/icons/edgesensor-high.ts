import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorHighIcon],svg[material-symbols-edgesensor-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 17v-7h2v7zm3-3V7h2v7zm5 8q-.825 0-1.412-.587T6 20V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v16q0 .825-.587 1.413T16 22zm11-5v-7h2v7zm3-3V7h2v7zM8 17h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
