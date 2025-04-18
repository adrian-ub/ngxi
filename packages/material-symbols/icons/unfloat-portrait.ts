import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfloatPortraitIcon],svg[material-symbols-unfloat-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.075 12.5l1.425-1.425L11.425 8H14V6H8v6h2V9.4l3.075 3.1ZM15 22v-7h5v7h-5Zm-9 0q-.825 0-1.412-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v9h-7v9H6Z"></svg:path>`,
})
export class MaterialSymbolsUnfloatPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
