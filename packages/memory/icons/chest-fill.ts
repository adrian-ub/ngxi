import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryChestFillIcon],svg[memory-chest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h-5V7H7v2H2V4h1V3h16v1h1m-8 9h-2v-1H9V9h4v3h-1m7 7H3v-1H2v-7h5v2h1v1h1v1h4v-1h1v-1h1v-2h5v7h-1Z"></svg:path>`,
})
export class MemoryChestFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
