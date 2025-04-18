import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsEyeClosedIcon],svg[pixelarticons-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h2v2H0zm4 4H2V9h2zm4 2v-2H4v2H2v2h2v-2zm8 0H8v2H6v2h2v-2h8v2h2v-2h-2zm4-2h-4v2h4v2h2v-2h-2zm2-2v2h-2V9zm0 0V7h2v2z"></svg:path>`,
})
export class PixelarticonsEyeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
