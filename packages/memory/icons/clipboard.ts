import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryClipboardIcon],svg[memory-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h1V4h4V2h2V1h4v1h2v2h4v1h1v15h-1v1H3v-1H2zm8-2v2h2V3zm8 3h-2v2H6V6H4v13h14z"></svg:path>`,
})
export class MemoryClipboardIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
