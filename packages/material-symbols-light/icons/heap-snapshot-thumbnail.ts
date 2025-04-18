import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeapSnapshotThumbnailIcon],svg[material-symbols-light-heap-snapshot-thumbnail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.116 18q-.667 0-1.141-.475t-.475-1.14v-8.77q0-.666.475-1.14T4.115 6h8.77q.666 0 1.14.475t.475 1.14v8.77q0 .666-.475 1.14t-1.14.475zm13.201-7q-.357 0-.587-.23t-.23-.587V6.817q0-.357.23-.587t.587-.23h3.366q.357 0 .587.23t.23.587v3.366q0 .358-.23.587t-.587.23zm0 7q-.357 0-.587-.23t-.23-.587v-3.366q0-.357.23-.587t.587-.23h3.366q.357 0 .587.23t.23.587v3.366q0 .358-.23.587t-.587.23zm-6.32-2.5q.417 0 .71-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m-5.048-.261l5.789-5.789l-.689-.688l-5.788 5.788zm.048-4.739q.415 0 .709-.291T7 9.502t-.291-.709t-.707-.293t-.709.291T5 9.498t.291.709t.707.293"></svg:path>`,
})
export class MaterialSymbolsLightHeapSnapshotThumbnailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
