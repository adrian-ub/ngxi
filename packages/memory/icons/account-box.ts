import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAccountBoxIcon],svg[memory-account-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h14v1h1v1h1v14h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1zm0 14h1v-1h2v-1h8v1h2v1h1V5h-1V4H5v1H4zm12 2v-1h-2v-1H8v1H6v1zM9 5h4v1h1v1h1v4h-1v1h-1v1H9v-1H8v-1H7V7h1V6h1zm3 3V7h-2v1H9v2h1v1h2v-1h1V8z"></svg:path>`,
})
export class MemoryAccountBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
