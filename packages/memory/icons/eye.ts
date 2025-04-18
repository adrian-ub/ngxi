import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryEyeIcon],svg[memory-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14H9v-1H8V9h1V8h4v1h1v4h-1m2 4H7v-1H5v-1H3v-1H2v-1H1V9h1V8h1V7h2V6h2V5h8v1h2v1h2v1h1v1h1v4h-1v1h-1v1h-2v1h-2m-3-4v-2h-2v2m5 3v-1h2v-1h1v-1h1v-2h-1V9h-1V8h-2V7H7v1H5v1H4v1H3v2h1v1h1v1h2v1Z"></svg:path>`,
})
export class MemoryEyeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
