import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWellIcon],svg[memory-well-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H3v-5H1v-2h20v2h-2zM5 16v3h12v-3zM2 7V5h1V4h1V3h1V2h1V1h10v1h1v1h1v1h1v1h1v2h-2v6h-2V7h-4v2h2v4H8V9h2V7H6v6H4V7zm5-4v1H6v1h10V4h-1V3z"></svg:path>`,
})
export class MemoryWellIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
