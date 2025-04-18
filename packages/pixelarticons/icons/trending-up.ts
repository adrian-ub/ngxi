import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrendingUpIcon],svg[pixelarticons-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h8v8h-2v-4h-2V8h-4zm2 6v-2h2v2zm-2 2v-2h2v2zm-2 0h2v2h-2zm-2-2h2v2h-2zm-2 0v-2h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm0 0v2H2v-2z"></svg:path>`,
})
export class PixelarticonsTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
