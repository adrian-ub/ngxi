import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneNavigateBeforeIcon],svg[ic-twotone-navigate-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.2 6l-6 6l6 6l1.41-1.41L11.03 12l4.58-4.59z"></svg:path>`,
})
export class IcTwotoneNavigateBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
