import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskEmptyIcon],svg[memory-flask-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1h6v1h1v3h-1v2h1v2h1v2h1v2h1v1h1v2h1v4h-1v1H3v-1H2v-4h1v-2h1v-1h1v-2h1V9h1V7h1V5H7V2h1zm2 2v5H9v2H8v2H7v1H6v2H5v2H4v2h14v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1V8h-1V3z"></svg:path>`,
})
export class MemoryFlaskEmptyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
