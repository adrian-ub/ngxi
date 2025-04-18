import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMessageUserIcon],svg[memory-message-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9h-2V8H9V6h1V5h2v1h1v2h-1m3 5H7v-2h1v-1h6v1h1M3 16h1v-1h15V3H3M2 21H1V2h1V1h18v1h1v14h-1v1H5v1H4v1H3v1H2Z"></svg:path>`,
})
export class MemoryMessageUserIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
