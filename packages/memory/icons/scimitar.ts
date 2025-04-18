import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryScimitarIcon],svg[memory-scimitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19H9v-1H8v-1H7v1H6v1H4v-2h1v-1h1v-1H5v-1H4v-1h1v-1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1V9h1V7h1V4h-1V3h3v1h1v4h-1v2h-1v1h-1v1h-1v1h-1v1h-2v1H9v1h1v1h1v1h-1Z"></svg:path>`,
})
export class MemoryScimitarIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
