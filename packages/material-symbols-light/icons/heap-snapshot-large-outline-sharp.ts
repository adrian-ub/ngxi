import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeapSnapshotLargeOutlineSharpIcon],svg[material-symbols-light-heap-snapshot-large-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.498 18q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m-5.048-.262l5.789-5.788l-.689-.688l-5.789 5.788zM9.498 13q.416 0 .709-.291t.293-.707t-.291-.709T9.502 11t-.709.291t-.293.707t.291.709t.707.293M5 21V3h9.5L19 7.5V21zm9-13V4H6v16h12V8zM6 4v4zv16z"></svg:path>`,
})
export class MaterialSymbolsLightHeapSnapshotLargeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
