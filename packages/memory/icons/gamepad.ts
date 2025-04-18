import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadIcon],svg[memory-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v1h1v5h5v1h1v6h-1v1h-5v5h-1v1H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1zm-1 2H9v6H3v4h6v6h4v-6h6V9h-6z"></svg:path>`,
})
export class MemoryGamepadIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
