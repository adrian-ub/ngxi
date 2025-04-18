import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidEllipsisVerticalIcon],svg[fa6-solid-ellipsis-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 360a56 56 0 1 0 0 112a56 56 0 1 0 0-112m0-160a56 56 0 1 0 0 112a56 56 0 1 0 0-112m56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0"></svg:path>`,
})
export class Fa6SolidEllipsisVerticalIcon {
  readonly viewBox = input("0 0 128 512")
  readonly width = input("0.25em")
  readonly height = input("1em")
}
