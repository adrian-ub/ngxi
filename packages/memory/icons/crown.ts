import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCrownIcon],svg[memory-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h18v2H2zM4 6v1h1v1h1V7h1V6h1V5h1V4h1V3h2v1h1v1h1v1h1v1h1v1h1V7h1V6h1V5h1v11H2V5h1v1zm3 8h11v-4h-3V9h-1V8h-1V7h-1V6h-2v1H9v1H8v1H7v1H4v4z"></svg:path>`,
})
export class MemoryCrownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
