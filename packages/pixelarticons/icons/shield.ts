import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShieldIcon],svg[pixelarticons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v12h2V4h16v10h2zM6 14H4v2h2zm0 2h2v2h2v2H8v-2H6zm4 4v2h4v-2h2v-2h-2v2zm10-6h-2v2h-2v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
