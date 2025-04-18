import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageFlashIcon],svg[pixelarticons-message-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v10h2V2zM10 16H6v2H4v2h2v-2h4zm6-4h2v4h4v2h-2v2h-2v2h-2v-4h-4v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsMessageFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
