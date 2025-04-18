import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownLeftFillIcon],svg[memory-gamepad-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1m-8-8v-2H3v2m9 7v-2h-2v2Z"></svg:path>`,
})
export class MemoryGamepadDownLeftFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
