import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeapSnapshotLargeIcon],svg[material-symbols-light-heap-snapshot-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.498 18q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m-5.048-.262l5.789-5.788l-.689-.688l-5.789 5.788zM9.498 13q.416 0 .709-.291t.293-.707t-.291-.709T9.502 11t-.709.291t-.293.707t.291.709t.707.293m-2.882 8q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8h4l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLightHeapSnapshotLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
