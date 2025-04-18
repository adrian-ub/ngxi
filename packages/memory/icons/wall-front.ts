import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWallFrontIcon],svg[memory-wall-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v2h2V4h2m-2 12V8H4v8Z"></svg:path>`,
})
export class MemoryWallFrontIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
