import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMessageIcon],svg[memory-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1H5v1H4v1H3v1H2v1H1V2h1zm1 2v13h1v-1h15V3z"></svg:path>`,
})
export class MemoryMessageIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
