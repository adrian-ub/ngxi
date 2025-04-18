import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAxeIcon],svg[memory-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v1h1v1h1v1h2v1h2v1h1v1h1v2h-1v2h-1v1h-1v1h-2v1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1V9H9V8H8V6h1V5h1V4h1m-1 6v1h1v2h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1"></svg:path>`,
})
export class MemoryAxeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
