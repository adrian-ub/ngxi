import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCartIcon],svg[memory-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v2H6v-1H5v-4H4V8H3V3H1V1h4v3h16v4h-1v3h-1v1H7v2zM5 7h1v3h12V7h1V6H5zm2 10h2v1h1v2H9v1H7v-1H6v-2h1zm8 0h2v1h1v2h-1v1h-2v-1h-1v-2h1z"></svg:path>`,
})
export class MemoryCartIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
