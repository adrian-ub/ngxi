import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhotoFilterSharpIcon],svg[material-symbols-photo-filter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h11v2H5v14h14v-9h2v11H3Zm9-5l-1.25-2.75L8 12l2.75-1.25L12 8l1.25 2.75L16 12l-2.75 1.25L12 16Zm5-6l-.95-2.05L14 7l2.05-.95L17 4l.95 2.05L20 7l-2.05.95L17 10Z"></svg:path>`,
})
export class MaterialSymbolsPhotoFilterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
