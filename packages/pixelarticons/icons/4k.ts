import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticons4kIcon],svg[pixelarticons-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2v4h4V7h2v10H9v-4H3zm10 0h2v4h2v2h-2v4h-2zm6 8h-2v-2h2zm0 0h2v2h-2zm0-6h-2v2h2zm0 0V7h2v2z"></svg:path>`,
})
export class Pixelarticons4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
