import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCornerDownRightAltIcon],svg[uil-corner-down-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.92 12.62a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H8a1 1 0 0 1-1-1V7a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h9.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76"></svg:path>`,
})
export class UilCornerDownRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
