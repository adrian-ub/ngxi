import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDoorBoxIcon],svg[memory-door-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2v-2h2Zm3 4h1v-1h1V5h-1V4H5v1H4v12h1v1h1V6h10Zm2 2H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-4-2V8H8v10Z"></svg:path>`,
})
export class MemoryDoorBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
