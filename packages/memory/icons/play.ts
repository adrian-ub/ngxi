import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryPlayIcon],svg[memory-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7V4h2v1zm2 5h-1V9h-1V8H9v6h1v-1h1v-1h1z"></svg:path>`,
})
export class MemoryPlayIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
