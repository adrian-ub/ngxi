import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightBoxIcon],svg[memory-arrow-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-2v-2h1v-1h1v-1H6v-2h6V9h-1V8h-1V6h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1m6 5H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowRightBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
