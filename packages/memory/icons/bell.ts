import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBellIcon],svg[memory-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17H3v-1h1v-1h1V7h1V6h1V5h2V4h1V2h2v2h1v1h2v1h1v1h1v8h1v1h1m-7 4h-2v-1H9v-1h4v1h-1m3-4V8h-1V7h-1V6H9v1H8v1H7v7Z"></svg:path>`,
})
export class MemoryBellIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
