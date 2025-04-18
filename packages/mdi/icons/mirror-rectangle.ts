import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMirrorRectangleIcon],svg[mdi-mirror-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.29 10.28l3.24-3.25l1.06 1.06l-3.24 3.25zm.41 4.33l5.66-5.66L15.42 10l-5.66 5.67zM18 3v18H6V3zm2-2H4v22h16z"></svg:path>`,
})
export class MdiMirrorRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
