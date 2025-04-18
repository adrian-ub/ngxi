import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeapSnapshotMultipleSharpIcon],svg[material-symbols-light-heap-snapshot-multiple-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.249 10.5q.315 0 .533-.217T12 9.75t-.217-.533T11.25 9t-.533.217t-.218.532t.217.533t.532.218m.176 4.288l4.863-4.863l-.713-.714l-4.863 4.864zm4.324.212q.315 0 .533-.217t.218-.532t-.217-.533t-.532-.218t-.533.217t-.218.532t.217.533t.532.218M7 18V2h8.5L20 6.5V18zm8-11h4l-4-4zM3 22V8h1v13h10v1z"></svg:path>`,
})
export class MaterialSymbolsLightHeapSnapshotMultipleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
