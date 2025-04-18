import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSlideLibraryOutlineIcon],svg[material-symbols-slide-library-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4q-.825 0-1.413-.588T2 20V8q0-.825.588-1.413T4 6h5.975v2H4v12h16v-3.975h2V20q0 .825-.588 1.413T20 22ZM4 20V8v8.025v-.675V20Zm13-5.975l-1.55-3.475L11.975 9l3.475-1.55L17 4l1.55 3.45L22 9l-3.45 1.55L17 14.025Z"></svg:path>`,
})
export class MaterialSymbolsSlideLibraryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
