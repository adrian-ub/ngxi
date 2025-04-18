import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageTextIcon],svg[pixelarticons-message-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2zM6 7h12v2H6zm8 4H6v2h8z"></svg:path>`,
})
export class PixelarticonsMessageTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
