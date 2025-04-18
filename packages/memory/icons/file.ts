import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFileIcon],svg[memory-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1h1v1h1v1h1v1h1v1h1v1h1v13h-1v1H4v-1H3V2h1V1zm0 3h-1v4h4V7h-1V6h-1V5h-1zM5 3v16h12v-9h-6V9h-1V3z"></svg:path>`,
})
export class MemoryFileIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
