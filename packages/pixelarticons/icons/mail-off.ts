import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailOffIcon],svg[pixelarticons-mail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v2H2zm4 4H4V4h2zm2 2H6V6h2zm2 2H8V8h2zm2 2h-2v-2h2zm2 0h-2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2zm2-2h-2v2h2zm0 0V8h2v2zm-6-6h12v12h-2V6H10zm4 14v2H2V8h2v10z"></svg:path>`,
})
export class PixelarticonsMailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
