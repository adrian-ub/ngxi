import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrendingIcon],svg[pixelarticons-trending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v14h16v2H3zm6 10H7v2h2zm2-2v2H9v-2zm2 0v-2h-2v2zm2 0h-2v2h2zm2-2h-2v2h2zm2-2v2h-2V8zm0 0V6h2v2z"></svg:path>`,
})
export class PixelarticonsTrendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
