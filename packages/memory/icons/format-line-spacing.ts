import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatLineSpacingIcon],svg[memory-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-9V5h9m0 7h-9v-2h9m0 7h-9v-2h9M7 19H5v-1H4v-1H3v-1H2v-1h3V7H2V6h1V5h1V4h1V3h2v1h1v1h1v1h1v1H7v8h3v1H9v1H8v1H7Z"></svg:path>`,
})
export class MemoryFormatLineSpacingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
