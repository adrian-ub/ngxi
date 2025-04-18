import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeapSnapshotMultipleIcon],svg[material-symbols-heap-snapshot-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 11.5q.525 0 .888-.363t.362-.887t-.363-.888T11.25 9t-.888.363t-.362.887t.363.888t.887.362m.175 4.5L17 10.425L15.575 9L10 14.575zm4.325 0q.525 0 .888-.363T17 14.75t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362M19 19H8q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h7l6 6v10q0 .825-.587 1.413T19 19M14 8h5l-5-5zM4 23q-.825 0-1.412-.587T2 21V7h2v14h11v2z"></svg:path>`,
})
export class MaterialSymbolsHeapSnapshotMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
