import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatVerticalAlignCenterIcon],svg[memory-format-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9h-2V8H9V7H8V6H7V5h3V2h2v3h3v1h-1v1h-1v1h-1m6 4H4v-2h14m-6 10h-2v-3H7v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h-3Z"></svg:path>`,
})
export class MemoryFormatVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
