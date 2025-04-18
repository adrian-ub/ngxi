import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerRightDownIcon],svg[pixelarticons-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6v10h2v2h-2v2h-2v-2h-2v-2h2V6H4V4h12zm-4 10h-2v-2h2zm6 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
