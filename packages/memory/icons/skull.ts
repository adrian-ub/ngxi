import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memorySkullIcon],svg[memory-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h2V1h6v1h2v1h1v1h1v1h1v2h1v7h-1v2h-1v4h-1v1H5v-1H4v-4H3v-2H2V8h1V5h1V4h1V3h1zm9 3V4h-2V3H9v1H7v1H6v1H5v3H4v4h1v2h1v4h2v-2h2v2h2v-2h2v2h2v-4h1v-2h1V8h-1V6h-1V5zM7 8h3v3H7zm5 3V8h3v3zm-2 2h2v2h-2z"></svg:path>`,
})
export class MemorySkullIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
