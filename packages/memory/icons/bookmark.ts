import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBookmarkIcon],svg[memory-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h12v1h1v17h-2v-1h-2v-1h-2v-1h-2v1H8v1H6v1H4V3h1zm1 2v13h1v-1h2v-1h1v-1h2v1h1v1h2v1h1V4z"></svg:path>`,
})
export class MemoryBookmarkIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
