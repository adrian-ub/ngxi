import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMapIcon],svg[memory-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h2V3h2V2h4v1h3v1h2V3h2V2h3v16h-2v1h-2v1h-4v-1H9v-1H7v1H5v1H2zm2 2v11h2v-1h1V5H5v1zm8-1H9v11h1v1h3V6h-1zm4 1h-1v11h2v-1h1V5h-2z"></svg:path>`,
})
export class MemoryMapIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
