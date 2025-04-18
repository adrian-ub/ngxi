import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePencilIcon],svg[icon-park-outline-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m31 8.999l8 8m-31 15L36 4l8 7.999l-28 28l-10 2zm23-23l8 8m-30 15l7 7m-3-4l22-22"></svg:path>`,
})
export class IconParkOutlinePencilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
