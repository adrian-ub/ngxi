import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeapSnapshotThumbnailOutlineSharpIcon],svg[material-symbols-heap-snapshot-thumbnail-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h14v14zm16-8V5h6v6zm2-2h2V7h-2zM3 17h10V7H3zm14 2v-6h6v6zm2-2h2v-2h-2zM3 17V7zm16-8V7zm0 8v-2zm-8.5-1q.625 0 1.063-.437T12 14.5t-.437-1.062T10.5 13t-1.062.438T9 14.5t.438 1.063T10.5 16m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zM5.5 11q.625 0 1.062-.437T7 9.5t-.437-1.062T5.5 8t-1.062.438T4 9.5t.438 1.063T5.5 11"></svg:path>`,
})
export class MaterialSymbolsHeapSnapshotThumbnailOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
