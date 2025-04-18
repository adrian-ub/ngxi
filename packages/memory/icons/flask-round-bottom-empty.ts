import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskRoundBottomEmptyIcon],svg[memory-flask-round-bottom-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h4v2h1v5h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-6h1v-1h1V9h1V8h1V3h1zm1 4v4H9v1H8v1H7v1H6v4h1v1h1v1h1v1h4v-1h1v-1h1v-1h1v-4h-1v-1h-1v-1h-1V9h-1V5z"></svg:path>`,
})
export class MemoryFlaskRoundBottomEmptyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
