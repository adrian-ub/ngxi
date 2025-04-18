import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memorySearchIcon],svg[memory-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1H6v-1H4v-1H3v-2H2V6h1V4h1V3h2V2h5v1h2v1h1v2h1v5h-1v2h1v1h1v1h1v1h1v1h1v1h1v1h-1m-8-6v-1h1v-1h1V6h-1V5h-1V4H6v1H5v1H4v5h1v1h1v1Z"></svg:path>`,
})
export class MemorySearchIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
