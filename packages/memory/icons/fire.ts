import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFireIcon],svg[memory-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20H7v-1H6v-1H5v-1H4v-5h1v-2h1V9h1V8h1v1h1v2h1V9h1V5h-1V4H9V3H8V2h3v1h2v1h1v1h1v1h1v1h1v2h1v7h-1v2h-1v1h-2m-2-1v-1h2v-1h1v-2h1v-4h-1V8h-1V7h-1v4h-1v2h-1v1h-1v1H9v-1H8v-3H7v1H6v4h1v1h1v1Z"></svg:path>`,
})
export class MemoryFireIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
