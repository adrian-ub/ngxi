import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWallFrontDamagedIcon],svg[memory-wall-front-damaged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h1v-2h1v-1h1v-1h1v-1h2v-1h5v1h1v2h1v2h1V8H4m16 10h-4v-2h-1v-2h-1v-2h-3v1H9v1H8v1H7v2H6v1H2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v2h2V4h2m-9 16H6v-1h1v-1h3v1h1m5 1h-4v-2h1v-1h1v1h1v1h1Z"></svg:path>`,
})
export class MemoryWallFrontDamagedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
