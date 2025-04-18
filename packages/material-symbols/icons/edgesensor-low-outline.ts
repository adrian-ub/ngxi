import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorLowOutlineIcon],svg[material-symbols-edgesensor-low-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14V7h2v7zm18 3v-7h2v7zM8 22q-.825 0-1.412-.587T6 20V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v16q0 .825-.587 1.413T16 22zm8-3H8v1h8zM8 5h8V4H8zm0 0V4zm0 14v1zm0-2h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorLowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
