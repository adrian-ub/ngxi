import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTextBoxIcon],svg[memory-text-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h14v1h1v1h1v14h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1zm13 3V4H5v1H4v12h1v1h12v-1h1V5zM6 8h10v2H6zm0 4h7v2H6z"></svg:path>`,
})
export class MemoryTextBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
