import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTimeSandIcon],svg[memory-time-sand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h1V7h-1m-2 3h1V9h1V8h-1V7H9V6h1v1h1V6h1v1h1v1h1V7h1V5h1V4H6v1h1v1h1v2h1m1 3h1v-1h-1m1 2h1v-1h-1m8 9H3v-3h1v-1h1v-2h1v-2h1v-2H6V8H5V6H4V5H3V2h16v3h-1v1h-1v2h-1v2h-1v2h1v2h1v2h1v1h1m-6-7V8h-1v1h-1v1m5 8v-1h-1v-2h-1v-2h-1v-1h-1v2h1v2h1v1H8v-1h1v-2h1v-1h1v-1H9v1H8v2H7v2H6v1Z"></svg:path>`,
})
export class MemoryTimeSandIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
