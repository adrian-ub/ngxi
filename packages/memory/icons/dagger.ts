import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDaggerIcon],svg[memory-dagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V5h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h1Zm-4 6H4v-1H3v-2h1v-1h1v-1h1v-1H5v-1H4v-2h1V9h2v1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h5v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h1v2h-1v1h-2v-1H9v-1H8v1H7v1H6Z"></svg:path>`,
})
export class MemoryDaggerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
