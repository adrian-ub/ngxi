import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMessageProcessingIcon],svg[memory-message-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1H5v1H4v1H3v1H2v1H1V2h1zm2 14h15V3H3v13h1zm2-7h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MemoryMessageProcessingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
