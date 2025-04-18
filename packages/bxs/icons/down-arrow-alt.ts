import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsDownArrowAltIcon],svg[bxs-down-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h-5V6h-2v6H6l6 7z"></svg:path>`,
})
export class BxsDownArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
