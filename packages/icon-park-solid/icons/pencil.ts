import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPencilIcon],svg[icon-park-solid-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSPencil0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-path="url(#ipSPencil1)"><svg:path d="m31 8.999l8 8m-31 15L36 4l8 7.999l-28 28l-10 2l2-10Zm23-23l8 8m-30 15l7 7m-3-4l22-22"></svg:path></svg:g><svg:defs><svg:clippath id="ipSPencil1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPencil0)"></svg:path>`,
})
export class IconParkSolidPencilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
