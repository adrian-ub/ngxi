import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMembercardIcon],svg[pixelarticons-membercard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v14h-7v3h-2v-2h-2v2H9v-3H2zm2 2v4h16V5zm16 8H4v2h16z"></svg:path>`,
})
export class PixelarticonsMembercardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
