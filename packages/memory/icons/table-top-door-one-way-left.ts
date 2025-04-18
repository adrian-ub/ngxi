import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayLeftIcon],svg[memory-table-top-door-one-way-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15H5v-1H4v-1H3v-1H2v-2h1V9h1V8h1V7h1v3h3v2H6m6 10h-2V0h2v4h4v14h-4m2-2V6h-3v10Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
