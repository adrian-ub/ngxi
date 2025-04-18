import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaIFillIcon],svg[memory-alpha-i-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-2 5H9v2h1v6H9v2h4v-2h-1V8h1z"></svg:path>`,
})
export class MemoryAlphaIFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
