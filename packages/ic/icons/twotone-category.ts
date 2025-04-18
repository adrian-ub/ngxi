import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneCategoryIcon],svg[ic-twotone-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.5" cy="17.5" r="2.5" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m12 2l-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M11 13.5H3v8h8zm-2 6H5v-4h4z"></svg:path>`,
})
export class IcTwotoneCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
