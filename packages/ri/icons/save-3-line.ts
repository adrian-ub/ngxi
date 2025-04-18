import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSave3LineIcon],svg[ri-save-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 11v5h8v-5z"></svg:path>`,
})
export class RiSave3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
