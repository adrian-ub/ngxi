import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessagePlusIcon],svg[pixelarticons-message-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2zm-7 7h3v2h-3v3h-2v-3H8V9h3V6h2z"></svg:path>`,
})
export class PixelarticonsMessagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
