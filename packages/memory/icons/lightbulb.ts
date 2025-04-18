import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryLightbulbIcon],svg[memory-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19h6v2H8zm0-1v-4H7v-1H6v-1H5v-1H4V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v4zm5-6h1v-1h1v-1h1V6h-1V5h-1V4h-1V3H9v1H8v1H7v1H6v4h1v1h1v1h1v1h1v3h2v-3h1z"></svg:path>`,
})
export class MemoryLightbulbIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
