import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryApplicationIcon],svg[memory-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-1H2V3h1V2h16v1h1v16h-1ZM18 6V4H4v2Zm0 12V8H4v10Z"></svg:path>`,
})
export class MemoryApplicationIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
