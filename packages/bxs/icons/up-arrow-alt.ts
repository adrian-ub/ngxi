import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsUpArrowAltIcon],svg[bxs-up-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v-6h5l-6-7l-6 7h5v6z"></svg:path>`,
})
export class BxsUpArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
