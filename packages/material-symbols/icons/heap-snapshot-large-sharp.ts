import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeapSnapshotLargeSharpIcon],svg[material-symbols-heap-snapshot-large-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 18.5q.625 0 1.063-.437T16 17t-.437-1.062T14.5 15.5t-1.062.438T13 17t.438 1.063t1.062.437m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zm.05-4.95q.625 0 1.063-.437T11 12t-.437-1.062T9.5 10.5t-1.062.438T8 12t.438 1.063T9.5 13.5M4 22V2h10l6 6v14zm9-13h5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsHeapSnapshotLargeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
