import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpearIcon],svg[mdi-spear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h.41l-13 13L2 20.59l13-13V9zm0-5v4h4l2-6z"></svg:path>`,
})
export class MdiSpearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
