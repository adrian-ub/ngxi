import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAvatarIcon],svg[pixelarticons-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm16 16V5H5v14zM14 7h-4v4h4zm1 6H9v2H7v2h2v-2h6v2h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsAvatarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
