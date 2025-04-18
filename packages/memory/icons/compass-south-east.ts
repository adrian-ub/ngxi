import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCompassSouthEastIcon],svg[memory-compass-south-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6h5v2H6v2h3v1h1v4H9v1H4v-2h4v-2H5v-1H4V7h1m7-1h6v2h-4v2h4v2h-4v2h4v2h-6"></svg:path>`,
})
export class MemoryCompassSouthEastIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
