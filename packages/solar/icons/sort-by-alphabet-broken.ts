import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetBrokenIcon],svg[solar-sort-by-alphabet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 7H3m7 5H3m5 5H3"></svg:path><svg:path fill="currentColor" d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944l.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694l4.5-10l-1.368-.616l-4.5 10zm9-.616l-1.636-3.636l-1.368.615l1.636 3.637zm-1.636-3.636l-2.864-6.364l-1.368.616l2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"></svg:path></svg:g>`,
})
export class SolarSortByAlphabetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
