import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaArrowRightOutlineIcon],svg[cuida-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 12.214a1 1 0 0 0-1-1H5a1 1 0 1 0 0 2h12.5a1 1 0 0 0 1-1" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 12.214a1 1 0 0 0-.293-.707l-4.5-4.5a1 1 0 1 0-1.414 1.414l3.793 3.793l-3.793 3.793a1 1 0 0 0 1.414 1.415l4.5-4.5a1 1 0 0 0 .293-.708" clip-rule="evenodd"></svg:path>`,
})
export class CuidaArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
