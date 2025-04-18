import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSkipPreviousIcon],svg[ic-twotone-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14.14V9.86L12.97 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M6 6h2v12H6zm12 12V6l-8.5 6zm-2-3.86L12.97 12L16 9.86z"></svg:path>`,
})
export class IcTwotoneSkipPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
