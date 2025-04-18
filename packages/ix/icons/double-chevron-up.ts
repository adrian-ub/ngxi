import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronUpIcon],svg[ix-double-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M134.186 230.187L256 108.587l121.813 121.6l-30.293 30.293L256 168.747l-91.52 91.733zm0 128L256 236.587l121.813 121.6l-30.293 30.293L256 296.747l-91.52 91.733z"></svg:path>`,
})
export class IxDoubleChevronUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
