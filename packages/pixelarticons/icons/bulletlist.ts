import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBulletlistIcon],svg[pixelarticons-bulletlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11V5h6v6zm4-2V7H4v2zm16-4H10v2h12zm0 4H10v2h12zm-12 4h12v2H10zm12 4H10v2h12zM2 13v6h6v-6zm4 2v2H4v-2z"></svg:path>`,
})
export class PixelarticonsBulletlistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
