import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSave2LineIcon],svg[ri-save-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V7.828L16.172 5zM4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6M6 6h9v4H6z"></svg:path>`,
})
export class RiSave2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
