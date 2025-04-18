import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaXFillIcon],svg[memory-alpha-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-2 15h2v-3h-1v-1h-1v-2h1V9h1V6h-2v2h-1v1h-2V8H9V6H7v3h1v1h1v2H8v1H7v3h2v-2h1v-1h2v1h1z"></svg:path>`,
})
export class MemoryAlphaXFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
