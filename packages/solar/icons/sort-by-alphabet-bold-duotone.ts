import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetBoldDuotoneIcon],svg[solar-sort-by-alphabet-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 0 0 1.368.616l1.438-3.194h4.757l1.437 3.194a.75.75 0 0 0 1.368-.616zM16.5 8.828l-1.703 3.786h3.407z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path>`,
})
export class SolarSortByAlphabetBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
