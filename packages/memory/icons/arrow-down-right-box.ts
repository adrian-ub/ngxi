import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownRightBoxIcon],svg[memory-arrow-down-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15H8v-2h3v-1h-1v-1H9v-1H8V9H7V8h1V7h1v1h1v1h1v1h1v1h1V8h2m3 12H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowDownRightBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
