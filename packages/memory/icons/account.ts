import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAccountIcon],svg[memory-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3h4v1h1v1h1v4h-1v1h-1v1H9v-1H8V9H7V5h1V4h1zm1 5v1h2V8h1V6h-1V5h-2v1H9v2zm-3 4h8v1h2v1h1v1h1v4H3v-4h1v-1h1v-1h2zm-1 4H5v1h12v-1h-1v-1h-2v-1H8v1H6z"></svg:path>`,
})
export class MemoryAccountIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
