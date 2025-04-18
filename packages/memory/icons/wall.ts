import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWallIcon],svg[memory-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H4v-5H1V7h3V2h15v5h2v8h-2ZM12 7V4H6v3Zm5 0V4h-3v3Zm-9 6V9H3v4Zm11 0V9h-9v4Zm-8 5v-3H6v3Zm6 0v-3h-4v3Z"></svg:path>`,
})
export class MemoryWallIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
