import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskRoundBottomIcon],svg[memory-flask-round-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h2v2h-2zm2-10v2h1v5h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-6h1v-1h1V9h1V8h1V3h1V1zm-1 4h-2v4H9v1H8v1H7v1H6v2h1v-1h2v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h-1v-1h-1v-1h-1V9h-1z"></svg:path>`,
})
export class MemoryFlaskRoundBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
