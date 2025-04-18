import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneNavigateNextIcon],svg[ic-twotone-navigate-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.02 18l6-6l-6-6l-1.41 1.41L13.19 12l-4.58 4.59z"></svg:path>`,
})
export class IcTwotoneNavigateNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
