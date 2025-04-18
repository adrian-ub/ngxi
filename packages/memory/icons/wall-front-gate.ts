import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWallFrontGateIcon],svg[memory-wall-front-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h-7v-5h-1v-1h-2v1H9v5H2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v2h2V4h2m-2 12V8H4v8h3v-4h1v-1h1v-1h4v1h1v1h1v4Z"></svg:path>`,
})
export class MemoryWallFrontGateIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
