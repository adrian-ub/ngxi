import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCastleIcon],svg[memory-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-7v-6h-2v6H3v-6H2V4h5v2h1V4h6v2h1V4h5v9h-1m-2 4v-5h1V6h-1v2h-5V6h-2v2H5V6H4v6h1v5h3v-5h1v-1h4v1h1v5Z"></svg:path>`,
})
export class MemoryCastleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
