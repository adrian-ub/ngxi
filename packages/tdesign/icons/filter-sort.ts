import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilterSortIcon],svg[tdesign-filter-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.57 3h18.86l-6.93 9.817V21h-5v-8.183zm3.86 2l5.07 7.183V19h1v-6.817L17.57 5zm11.952 12.351L20 18.974l1.618-1.623l1.416 1.412L20 21.806l-3.034-3.042zm-.002-.714L20 15.015l1.619 1.622l1.415-1.414L20 12.185l-3.034 3.038z"></svg:path>`,
})
export class TdesignFilterSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
