import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsRightArrowAltIcon],svg[bxs-right-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 12l-7-6v5H6v2h6v5z"></svg:path>`,
})
export class BxsRightArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
