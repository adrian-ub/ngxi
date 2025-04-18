import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaSwapHorizontalArrowsOutlineIcon],svg[cuida-swap-horizontal-arrows-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.207 13.007a1 1 0 0 1 0 1.414l-1.793 1.793H15a1 1 0 1 1 0 2H5.414l1.793 1.793a1 1 0 1 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0m9.586-9a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414-1.414l1.793-1.793H9a1 1 0 0 1 0-2h9.586l-1.793-1.793a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class CuidaSwapHorizontalArrowsOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
