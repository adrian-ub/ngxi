import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSearchIcon],svg[nrk-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 19a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-2.118a6.882 6.882 0 1 1 0-13.764a6.882 6.882 0 0 1 0 13.764M15.896 19l2.426 4h2.34l-2.427-4z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
