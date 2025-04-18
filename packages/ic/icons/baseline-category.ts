import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineCategoryIcon],svg[ic-baseline-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l-5.5 9h11z"></svg:path><svg:circle cx="17.5" cy="17.5" r="4.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 13.5h8v8H3z"></svg:path>`,
})
export class IcBaselineCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
