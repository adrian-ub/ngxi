import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMediaInteractiveIcon],svg[dashicons-media-interactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4 4v12H4V2zm0 4h3l-3-3zm2 8V8H6v6h3l-1 2h1l1-2l1 2h1l-1-2zm-6-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m5-2v2h-3V9zm0 3v1H7v-1z"></svg:path>`,
})
export class DashiconsMediaInteractiveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
