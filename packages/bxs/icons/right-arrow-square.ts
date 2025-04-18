import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsRightArrowSquareIcon],svg[bxs-right-arrow-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m4 6h5V7l5 5l-5 5v-4H7z"></svg:path>`,
})
export class BxsRightArrowSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
