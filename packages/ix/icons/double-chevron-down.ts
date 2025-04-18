import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronDownIcon],svg[ix-double-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M377.814 281.813L256 403.413l-121.813-121.6l30.293-30.293L256 343.253l91.52-91.733zm0-128L256 275.413l-121.813-121.6l30.293-30.293L256 215.253l91.52-91.733z"></svg:path>`,
})
export class IxDoubleChevronDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
