import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeapSnapshotMultipleOutlineSharpIcon],svg[material-symbols-heap-snapshot-multiple-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 11.5q.525 0 .888-.363t.362-.887t-.363-.888T11.25 9t-.888.363t-.362.887t.363.888t.887.362m.175 4.5L17 10.425L15.575 9L10 14.575zm4.325 0q.525 0 .888-.363T17 14.75t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362M6 19V1h9l6 6v12zm8-11V3H8v14h11V8zM2 23V7h2v14h11v2zM8 3v5zv14z"></svg:path>`,
})
export class MaterialSymbolsHeapSnapshotMultipleOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
