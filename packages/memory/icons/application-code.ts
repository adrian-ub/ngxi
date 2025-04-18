import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryApplicationCodeIcon],svg[memory-application-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16H9v-1H8v-4h1v-1h2v2h-1v2h1m4 2h-2v-2h1v-2h-1v-2h2v1h1v4h-1m4 5H3v-1H2V3h1V2h16v1h1v16h-1M18 6V4H4v2m14 12V8H4v10Z"></svg:path>`,
})
export class MemoryApplicationCodeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
