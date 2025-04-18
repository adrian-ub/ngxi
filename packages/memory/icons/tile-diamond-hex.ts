import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTileDiamondHexIcon],svg[memory-tile-diamond-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-4H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H0v-2h4V9h1V8h1V7h1V6h1V5h1V4h1V0h2v4h1v1h1v1h1v1h1v1h1v1h1v1h4v2h-4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1m0-2v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6h-2v1H9v1H8v1H7v1H6v2h1v1h1v1h1v1h1v1Z"></svg:path>`,
})
export class MemoryTileDiamondHexIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
