import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownLeftIcon],svg[memory-gamepad-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H4v-2h2m6 8h-2v-2h2m2 5H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
