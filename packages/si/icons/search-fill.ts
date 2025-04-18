import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSearchFillIcon],svg[si-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11m9-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14" clip-rule="evenodd"></svg:path>`,
})
export class SiSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
