import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryRelativeScaleIcon],svg[memory-relative-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10H5V9h1V8h2v1H7m4 1H9V9h1V8h2v1h-1m4 1h-2V9h1V8h2v1h-1m0 5h-1v-2h1v-1h1v2h-1m4 6H3v-1H2V4h1V3h16v1h1v14h-1m-1-1V5H4v12h10v-1h1v-1h1v2Z"></svg:path>`,
})
export class MemoryRelativeScaleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
