import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesPantsSweatIcon],svg[icon-park-outline-clothes-pants-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 19l9 19h9L38 4H10L6 38h9zm10 19l1 6h6v-6zm-21 6H7v-6h7zM24 4l4 7.5M24 4l-4 7.5"></svg:path>`,
})
export class IconParkOutlineClothesPantsSweatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
