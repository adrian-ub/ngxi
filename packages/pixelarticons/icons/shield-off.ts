import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShieldOffIcon],svg[pixelarticons-shield-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h14v12h-2V4H8zM2 8h2v6H2zm2 6h2v2H4zm4 2H6v2h2v2h2v2h4v-2h-4v-2H8zm10 0h-2v2h2v2h2v2h2v-2h-2v-2h-2zM4 2H2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2V8H8V6H6V4H4z"></svg:path>`,
})
export class PixelarticonsShieldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
