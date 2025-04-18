import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsReceiptPercent20SolidIcon],svg[heroicons-receipt-percent-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.93 2.31a41.4 41.4 0 0 1 10.14 0A2.213 2.213 0 0 1 17 4.517V17.25a.75.75 0 0 1-1.075.676l-2.8-1.344l-2.8 1.344a.75.75 0 0 1-.65 0l-2.8-1.344l-2.8 1.344A.75.75 0 0 1 3 17.25V4.517c0-1.103.806-2.068 1.93-2.207m8.85 4.97a.75.75 0 0 0-1.06-1.06l-6.5 6.5a.75.75 0 1 0 1.06 1.06zM9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsReceiptPercent20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
