import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskIcon],svg[memory-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12h2v2h-2zm3-11v1h1v3h-1v2h1v2h1v2h1v2h1v1h1v2h1v4h-1v1H3v-1H2v-4h1v-2h1v-1h1v-2h1V9h1V7h1V5H7V2h1V1zm-2 2h-2v5H9v2H8v2H7v1H6v2H5v2h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h2v-1h1v-2h1v-1h-1v-2h-1v-2h-1V8h-1z"></svg:path>`,
})
export class MemoryFlaskIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
