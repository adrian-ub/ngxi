import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronLeftIcon],svg[ix-double-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M236.583 256.007L358.204 377.82l30.272-30.315l-91.712-91.498l91.712-91.52l-30.272-30.315zm-127.979 0L230.183 377.82l30.293-30.315l-91.733-91.498l91.733-91.52l-30.293-30.315z"></svg:path>`,
})
export class IxDoubleChevronLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
