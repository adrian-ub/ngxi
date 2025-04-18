import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCalculatorIcon],svg[memory-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21H4v-1H3V3h1V2h14v1h1v17h-1ZM16 7V4H6v3Zm-8 4V9H6v2Zm4 0V9h-2v2Zm4 0V9h-2v2Zm-8 4v-2H6v2Zm4 0v-2h-2v2Zm4 0v-2h-2v2Zm-8 4v-2H6v2Zm4 0v-2h-2v2Zm4 0v-2h-2v2Z"></svg:path>`,
})
export class MemoryCalculatorIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
