import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMagnifyPlusIcon],svg[memory-magnify-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12H8v-2H6V8h2V6h2v2h2v2h-2m9 10h-2v-1h-1v-1h-1v-1h-1v-2h-2v1H6v-1H5v-1H4v-1H3v-1H2V6h1V5h1V4h1V3h1V2h6v1h1v1h1v1h1v1h1v6h-1v2h2v1h1v1h1v1h1v2h-1m-8-5v-1h2v-2h1V7h-1V5h-2V4H7v1H5v2H4v4h1v2h2v1Z"></svg:path>`,
})
export class MemoryMagnifyPlusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
