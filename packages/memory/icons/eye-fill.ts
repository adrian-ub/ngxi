import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryEyeFillIcon],svg[memory-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14h-2v-1H9v-1H8v-2h1V9h1V8h2v1h1v1h1v2h-1v1h-1m3 4H7v-1H5v-1H3v-1H2v-1H1V9h1V8h1V7h2V6h2V5h8v1h2v1h2v1h1v1h1v4h-1v1h-1v1h-2v1h-2m-2-1v-1h1v-1h1V9h-1V8h-1V7H9v1H8v1H7v4h1v1h1v1Z"></svg:path>`,
})
export class MemoryEyeFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
