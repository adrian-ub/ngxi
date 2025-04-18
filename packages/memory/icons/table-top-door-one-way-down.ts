import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayDownIcon],svg[memory-table-top-door-one-way-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H0v-2h4V6h14v4h4M12 20h-2v-1H9v-1H8v-1H7v-1h3v-3h2v3h3v1h-1v1h-1v1h-1m4-8V8H6v3Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
