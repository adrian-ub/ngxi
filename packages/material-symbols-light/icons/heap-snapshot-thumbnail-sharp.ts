import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeapSnapshotThumbnailSharpIcon],svg[material-symbols-light-heap-snapshot-thumbnail-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 18V6h12v12zm14-7V6h5v5zm0 7v-5h5v5zm-5.502-2.5q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m-5.048-.261l5.789-5.789l-.689-.688l-5.788 5.788zm.048-4.739q.415 0 .709-.291T7 9.502t-.291-.709t-.707-.293t-.709.291T5 9.498t.291.709t.707.293"></svg:path>`,
})
export class MaterialSymbolsLightHeapSnapshotThumbnailSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
